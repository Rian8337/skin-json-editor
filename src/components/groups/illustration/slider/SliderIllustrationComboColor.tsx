import { useContext } from "react";
import { SliderIllustrationComboColorContext } from "@hooks/Illustration/SliderIllustrationComboColorContext";
import SingleColorEditor from "@components/editors/SingleColorEditor";

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
