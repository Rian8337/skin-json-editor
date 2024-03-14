import { useContext, useEffect, useRef, useState } from "react";
import { SliderBodyColorContext } from "../../../../hooks/Slider/SliderBodyColorContext";
import { SliderIllustrationCircleSizeContext } from "../../../../hooks/Illustration/SliderIllustrationCircleSizeContext";
import { SliderBodyWidthContext } from "../../../../hooks/Slider/SliderBodyWidthContext";
import { SliderBorderWidthContext } from "../../../../hooks/Slider/SliderBorderWidthContext";
import { SliderBodyBaseAlphaContext } from "../../../../hooks/Slider/SliderBodyBaseAlphaContext";
import { SliderFollowComboColorContext } from "../../../../hooks/Slider/SliderFollowComboColorContext";
import { SliderIllustrationComboColorContext } from "../../../../hooks/Illustration/SliderIllustrationComboColorContext";
import { SliderHintEnableContext } from "../../../../hooks/Slider/SliderHintEnableContext";
import { SliderHintAlphaContext } from "../../../../hooks/Slider/SliderHintAlphaContext";
import { SliderHintColorContext } from "../../../../hooks/Slider/SliderHintColorContext";
import { SliderHintWidthContext } from "../../../../hooks/Slider/SliderHintWidthContext";
import { SliderBorderColorContext } from "../../../../hooks/Slider/SliderBorderColorContext";
import {
    circleSizeToScale,
    scaleToRadius,
} from "../../../../utils/circleSizeCalculator";

export default function SliderIllustrationCanvas() {
    const circleSize = useContext(SliderIllustrationCircleSizeContext);
    const sliderComboColor = useContext(SliderIllustrationComboColorContext);

    const sliderBodyColor = useContext(SliderBodyColorContext);
    const sliderBodyBaseAlpha = useContext(SliderBodyBaseAlphaContext);
    const sliderBodyWidth = useContext(SliderBodyWidthContext);

    const sliderBorderWidth = useContext(SliderBorderWidthContext);
    const sliderBorderColor = useContext(SliderBorderColorContext);

    const sliderFollowComboColor = useContext(SliderFollowComboColorContext);

    const sliderHintEnable = useContext(SliderHintEnableContext);
    const sliderHintAlpha = useContext(SliderHintAlphaContext);
    const sliderHintColor = useContext(SliderHintColorContext);
    const sliderHintWidth = useContext(SliderHintWidthContext);

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
        if (!canvasRef.current) {
            return;
        }

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) {
            return;
        }

        const { canvas } = ctx;
        const { height } = canvas;

        // Redraw the canvas with respect to settings.
        canvas.width = width;

        ctx.save();
        ctx.fillRect(0, 0, width, height);

        // Put the origin at the left-center.
        ctx.translate(0, height / 2);

        const scale = circleSizeToScale(circleSize.value, height);
        const radius = scaleToRadius(scale, height);

        // Stroke the slider path.
        ctx.beginPath();

        const bodyPadding = radius + width / 50;
        ctx.moveTo(bodyPadding, 0);
        ctx.lineTo(width - bodyPadding, 0);

        // Draw the border first as it is the most bottom layer.
        ctx.strokeStyle = sliderBorderColor.value;
        ctx.globalAlpha = 1;
        ctx.lineWidth = radius * 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Afterwards, draw the body.
        ctx.lineWidth =
            ((sliderBodyWidth.value - sliderBorderWidth.value) /
                sliderBodyWidth.value) *
            radius *
            2;

        // Make the body area empty first, otherwise it will overlap with the slider border.
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#000000";
        ctx.stroke();

        ctx.globalAlpha = sliderBodyBaseAlpha.value;
        ctx.strokeStyle = sliderBodyColor.value;

        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        ctx.stroke();

        // Draw slider hint.
        if (sliderHintEnable.value) {
            ctx.globalAlpha = sliderHintAlpha.value;
            ctx.lineWidth =
                (sliderHintWidth.value / sliderBodyWidth.value) * radius * 2;
            ctx.strokeStyle = sliderHintColor.value ?? sliderBodyColor.value;
            ctx.stroke();
        }

        ctx.closePath();

        // Draw the slider head.
        ctx.fillStyle = sliderFollowComboColor.value
            ? sliderBodyColor.value
            : sliderComboColor.value;
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.moveTo(bodyPadding, 0);
        ctx.arc(bodyPadding, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }, [
        width,
        sliderBodyColor.value,
        circleSize.value,
        sliderBodyWidth.value,
        sliderBorderWidth.value,
        sliderBodyBaseAlpha.value,
        sliderFollowComboColor.value,
        sliderComboColor.value,
        sliderHintEnable.value,
        sliderHintAlpha.value,
        sliderHintWidth.value,
        sliderHintColor.value,
        sliderBorderColor.value,
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
