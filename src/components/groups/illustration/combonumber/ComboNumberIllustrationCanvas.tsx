import { useRef, useState, useEffect, useContext, useMemo } from "react";
import {
    ComboNumberIllustrationCircleSizeContext,
    ComboNumberIllustrationNumbersContext,
} from "@hooks/Illustration";
import { circleSizeToScale, scaleToRadius } from "@utils/circleSizeCalculator";
import {
    ComboTextScaleContext,
    LimitComboTextLengthContext,
} from "@hooks/Utils";
import { HitCircleOverlapContext } from "@hooks/Fonts";

export default function ComboNumberIllustrationCanvas() {
    const circleSize = useContext(ComboNumberIllustrationCircleSizeContext);
    const comboNumbers = useContext(ComboNumberIllustrationNumbersContext);

    const numberImages = useMemo(() => {
        const images: HTMLImageElement[] = [];

        for (let i = 0; i < 10; i++) {
            const image = new Image();
            image.src = `default-${i}.png`;

            images.push(image);
        }

        return images;
    }, []);

    const limitComboTextLength = useContext(LimitComboTextLengthContext);
    const comboTextScale = useContext(ComboTextScaleContext);
    const hitCircleOverlap = useContext(HitCircleOverlapContext);

    const divRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [width, setWidth] = useState(0);

    // Div width observer
    useEffect(() => {
        if (!divRef.current) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            setWidth(entries[0].contentRect.width);
        });

        observer.observe(divRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Canvas drawing
    useEffect(() => {
        if (!canvasRef.current || !numberImages.some((i) => i.complete)) {
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return;
        }

        const { height } = canvas;

        // Redraw the canvas with respect to settings.
        canvas.width = width;

        ctx.save();
        ctx.fillRect(0, 0, width, height);

        // Put the origin at the center.
        ctx.translate(width / 2, height / 2);

        const scale = circleSizeToScale(circleSize.value, height);
        const radius = scaleToRadius(scale, height);

        // Draw the base circle.
        ctx.fillStyle = "rgba(100, 100, 100, 0.8)";
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        // Draw combo numbers.
        const comboNumberScale = scale * comboTextScale.value;
        const comboLetters = comboNumbers.value.toString().split("");

        if (limitComboTextLength.value) {
            const image =
                numberImages[parseInt(comboLetters[comboLetters.length - 1])];

            const imageSizeScale = image.height / height;

            const imageWidth = image.width * imageSizeScale * comboNumberScale;
            const imageHeight =
                image.height * imageSizeScale * comboNumberScale;

            ctx.drawImage(
                image,
                -imageWidth / 2,
                -imageHeight / 2,
                imageWidth,
                imageHeight
            );
        } else {
            const images = comboLetters.map(
                (letter) => numberImages[parseInt(letter)]
            );

            let totalWidth =
                images.reduce(
                    (a, v) =>
                        a + ((v.width * v.height) / height) * comboNumberScale,
                    0
                ) +
                hitCircleOverlap.value * (images.length - 1);

            for (const image of images) {
                const imageSizeScale = image.height / height;

                const imageWidth =
                    image.width * imageSizeScale * comboNumberScale;
                const imageHeight =
                    image.height * imageSizeScale * comboNumberScale;

                ctx.drawImage(
                    image,
                    -totalWidth / 2,
                    -imageHeight / 2,
                    imageWidth,
                    imageHeight
                );

                totalWidth -= (imageWidth + hitCircleOverlap.value) * 2;
            }
        }

        ctx.restore();
    }, [
        circleSize.value,
        comboNumbers.value,
        comboTextScale.value,
        hitCircleOverlap.value,
        limitComboTextLength.value,
        numberImages,
        width,
    ]);

    return (
        <div
            ref={divRef}
            style={{
                textAlign: "center",
            }}
        >
            <canvas ref={canvasRef} />
        </div>
    );
}
