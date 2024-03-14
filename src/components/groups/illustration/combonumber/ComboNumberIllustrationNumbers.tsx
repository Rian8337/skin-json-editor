import { useContext } from "react";
import { ComboNumberIllustrationNumbersContext } from "../../../../hooks/Illustration/ComboNumberIllustrationNumbersContext";
import SliderInputEditor from "../../../editors/SliderInputEditor";

export default function ComboNumberIllustrationNumbers() {
    const ctx = useContext(ComboNumberIllustrationNumbersContext);

    return (
        <SliderInputEditor
            title="Combo Number"
            description="The combo number to display."
            resettable={ctx}
        />
    );
}
