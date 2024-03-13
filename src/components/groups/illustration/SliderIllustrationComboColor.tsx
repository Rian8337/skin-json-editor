import { useContext } from "react";
import { SliderIllustrationComboColorContext } from "../../../hooks/SliderIllustration/SliderIllustrationComboColorContext";
import SingleColorEditor from "../../editors/SingleColorEditor";

export default function SliderIllustrationComboColor() {
    const ctx = useContext(SliderIllustrationComboColorContext);

    return (
        <SingleColorEditor
            title="Combo Color"
            description="The combo color of the slider."
            resettable={ctx}
        />
    );
}
