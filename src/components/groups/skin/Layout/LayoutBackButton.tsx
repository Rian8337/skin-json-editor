import { useContext } from "react";
import { BackButtonHeightContext } from "../../../../hooks/Layout/BackButton/BackButtonHeightContext";
import { BackButtonScaleContext } from "../../../../hooks/Layout/BackButton/BackButtonScaleContext";
import { BackButtonWidthContext } from "../../../../hooks/Layout/BackButton/BackButtonWidthContext";
import { BackButtonScaleWhenHoldContext } from "../../../../hooks/Layout/BackButton/BackButtonScaleWhenHoldContext";
import CheckBoxEditor from "../../../editors/CheckBoxEditor";
import LayoutButtonEditors from "./LayoutButtonEditors";
import { BackButtonXContext } from "../../../../hooks/Layout/BackButton/BackButtonXContext";
import { BackButtonYContext } from "../../../../hooks/Layout/BackButton/BackButtonYContext";

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
