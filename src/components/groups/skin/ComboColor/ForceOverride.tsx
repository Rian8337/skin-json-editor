import { useContext } from "react";
import CheckBoxEditor from "../../../editors/CheckBoxEditor";
import { ForceOverrideContext } from "../../../../hooks/ComboColor/ForceOverrideContext";

export default function ForceOverride() {
    const ctx = useContext(ForceOverrideContext);

    return (
        <CheckBoxEditor
            title="Override Combo Colors"
            description="Use the combo colors provided in a colors list rather than the ones provided by a beatmap or default combo colors."
            resettable={ctx}
        />
    );
}
