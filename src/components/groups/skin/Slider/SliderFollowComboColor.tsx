import { useContext } from "react";
import CheckBoxEditor from "@components/editors/CheckBoxEditor";
import { SliderFollowComboColorContext } from "@hooks/Slider/SliderFollowComboColorContext";

export default function SliderFollowComboColor() {
    const ctx = useContext(SliderFollowComboColorContext);

    return (
        <CheckBoxEditor
            title="Follow Combo Color"
            description="If checked, its color will follow the color of its combo sequence."
            resettable={ctx}
        />
    );
}
