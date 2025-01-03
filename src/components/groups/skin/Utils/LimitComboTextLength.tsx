import { useContext } from "react";
import { LimitComboTextLengthContext } from "@hooks/Utils";
import { CheckBoxEditor } from "@components/editors";

export default function LimitComboTextLength() {
    const ctx = useContext(LimitComboTextLengthContext);

    return (
        <CheckBoxEditor
            title="Limit Combo Number"
            description="Only show the first digit of a combo number above 9."
            resettable={ctx}
        />
    );
}
