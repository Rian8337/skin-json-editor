import { useContext } from "react";
import { SliderHintColorContext } from "../../../../hooks/Slider/SliderHintColorContext";
import SingleColorEditor from "../../../editors/SingleColorEditor";

export default function SliderHintColor() {
    const ctx = useContext(SliderHintColorContext);

    return (
        <SingleColorEditor
            title="Color"
            description="If unspecified, follows the combo color of the slider."
            resettable={ctx}
        />
    );
}
