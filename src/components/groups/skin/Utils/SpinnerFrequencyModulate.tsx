import CheckBoxEditor from "@components/editors/CheckBoxEditor";
import { SpinnerFrequencyModulateContext } from "@hooks/Utils/SpinnerFrequencyModulateContext";
import { useContext } from "react";

export default function SpinnerFrequencyModulate() {
    const ctx = useContext(SpinnerFrequencyModulateContext);

    return (
        <CheckBoxEditor
            title="Modulate Spinner Frequency"
            description="Whether spinnerspin hitsounds should pitch up as a spinner progresses."
            resettable={ctx}
        />
    );
}
