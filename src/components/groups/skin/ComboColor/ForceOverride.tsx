import { useContext } from "react";
import CheckBoxEditor from "../../../editors/CheckBoxEditor";
import { ForceOverrideContext } from "../../../../hooks/ComboColor/ForceOverrideContext";

export default function ForceOverride() {
    const ctx = useContext(ForceOverrideContext);

    return (
        <CheckBoxEditor
            title="Force Override Combo Colors"
            description="Use the combo colors provided in the colors list."
            resettable={ctx}
        />
    );
}
