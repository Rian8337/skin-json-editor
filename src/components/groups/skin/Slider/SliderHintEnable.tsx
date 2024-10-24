import { useContext } from "react";
import { SliderHintEnableContext } from "@hooks/Slider";
import CheckBoxEditor from "@components/editors/CheckBoxEditor";

export default function SliderHintEnable() {
    const ctx = useContext(SliderHintEnableContext);

    return (
        <CheckBoxEditor
            title="Enable Slider Hint"
            description="When a slider exceeds a certain length, its path will be indicated clearly with a line down the middle of the slider's body."
            resettable={ctx}
        />
    );
}
