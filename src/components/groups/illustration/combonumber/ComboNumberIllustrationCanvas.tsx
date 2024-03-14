import { useRef, useState, useEffect, useContext, useMemo } from "react";
import { ComboNumberIllustrationCircleSizeContext } from "../../../../hooks/Illustration/ComboNumberIllustrationCircleSizeContext";
import {
    circleSizeToScale,
    scaleToRadius,
} from "../../../../utils/circleSizeCalculator";
import { ComboTextScaleContext } from "../../../../hooks/Utils/ComboTextScaleContext";
import { LimitComboTextLengthContext } from "../../../../hooks/Utils/LimitComboTextLengthContext";
import { HitCircleOverlapContext } from "../../../../hooks/Fonts/HItCircleOverlapContext";

export default function ComboNumberIllustrationCanvas() {
    const circleSize = useContext(ComboNumberIllustrationCircleSizeContext);

    const number0 = useMemo(() => {
        const image = new Image();
        image.src = "default-0.png";

        return image;
    }, []);

    const number1 = useMemo(() => {
        const image = new Image();
        image.src = "default-1.png";

        return image;
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
        if (!canvasRef.current || !number0.complete || !number1.complete) {
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

        if (limitComboTextLength.value) {
            const imageSizeScale = number1.height / height;

            const imageWidth =
                number1.width * imageSizeScale * comboNumberScale;
            const imageHeight =
                number1.height * imageSizeScale * comboNumberScale;

            ctx.drawImage(
                number1,
                -imageWidth / 2,
                -imageHeight / 2,
                imageWidth,
                imageHeight
            );
        } else {
            const number0SizeScale = number0.height / height;
            const number0Width =
                number0.width * number0SizeScale * comboNumberScale;
            const number0Height =
                number0.height * number0SizeScale * comboNumberScale;

            const number1SizeScale = number1.height / height;
            const number1Width =
                number1.width * number1SizeScale * comboNumberScale;
            const number1Height =
                number1.height * number1SizeScale * comboNumberScale;
            const number1X =
                -(number1Width + number0Width + hitCircleOverlap.value) / 2;

            ctx.drawImage(
                number1,
                number1X,
                -number1Height / 2,
                number1Width,
                number1Height
            );

            ctx.drawImage(
                number0,
                number1X + number1Width + hitCircleOverlap.value,
                -number0Height / 2,
                number0Width,
                number0Height
            );
        }

        ctx.restore();
    }, [
        circleSize.value,
        comboTextScale.value,
        hitCircleOverlap.value,
        limitComboTextLength.value,
        number0,
        number0.complete,
        number1,
        number1.complete,
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
