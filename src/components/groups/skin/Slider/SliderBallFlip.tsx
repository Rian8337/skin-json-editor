import CheckBoxEditor from "@components/editors/CheckBoxEditor";
import { SliderBallFlipContext } from "@hooks/Slider";
import { useContext } from "react";

export default function SliderBallFlip() {
    const ctx = useContext(SliderBallFlipContext);

    return (
        <CheckBoxEditor
            title="Flip Slider Ball In Reverse"
            description="Whether the slider ball should be flipped when a slider is reversed."
            resettable={ctx}
        />
    );
}
