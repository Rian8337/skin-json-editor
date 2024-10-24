import { useContext } from "react";
import {
    BackButtonHeightContext,
    BackButtonScaleContext,
    BackButtonWidthContext,
    BackButtonScaleWhenHoldContext,
    BackButtonXContext,
    BackButtonYContext,
} from "@hooks/Layout";
import { CheckBoxEditor } from "@components/editors";
import LayoutButtonEditors from "./LayoutButtonEditors";

export default function LayoutBackButton() {
    const width = useContext(BackButtonWidthContext);
    const height = useContext(BackButtonHeightContext);
    const scale = useContext(BackButtonScaleContext);
    const x = useContext(BackButtonXContext);
    const y = useContext(BackButtonYContext);
    const scaleWhenHold = useContext(BackButtonScaleWhenHoldContext);

    return (
        <>
            <LayoutButtonEditors
                width={width}
                height={height}
                scale={scale}
                x={x}
                y={y}
            />
            <CheckBoxEditor
                title="Scale When Hold"
                description="When enabled, the button's size will change accordingly when tapped."
                resettable={scaleWhenHold}
            />
        </>
    );
}
