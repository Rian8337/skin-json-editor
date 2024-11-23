import { CheckBoxEditor } from "@components/editors";
import { RotateCursorTrailContext } from "@hooks/Cursor";
import { useContext } from "react";

export default function RotateCursorTrail() {
    const rotateCursorTrail = useContext(RotateCursorTrailContext);

    return (
        <CheckBoxEditor
            title="Rotate Cursor Trail"
            description="Rotate the cursor trail texture depending on the cursor's rotation at the time the trail spawns."
            resettable={rotateCursorTrail}
        />
    );
}
