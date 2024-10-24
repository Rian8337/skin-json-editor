import { useContext } from "react";
import { SliderHintColorContext } from "@hooks/Slider";
import SingleColorEditor from "@components/editors/SingleColorEditor";

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
