import { CheckBoxEditor } from "@components/editors";
import { SpinnerFrequencyModulateContext } from "@hooks/Utils";
import { useContext } from "react";

export default function SpinnerFrequencyModulate() {
    const ctx = useContext(SpinnerFrequencyModulateContext);

    return (
        <CheckBoxEditor
            title="Modulate Spinner Frequency"
            description={
                <>
                    Whether <code>spinnerspin</code> hitsounds should pitch up
                    as a spinner progresses.
                </>
            }
            resettable={ctx}
        />
    );
}
