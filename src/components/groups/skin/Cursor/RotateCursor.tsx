import { CheckBoxEditor } from "@components/editors";
import { RotateCursorContext } from "@hooks/Cursor";
import { useContext } from "react";

export default function RotateCursor() {
    const rotateCursor = useContext(RotateCursorContext);

    return (
        <CheckBoxEditor
            title="Rotate Cursor"
            description="Rotate the cursor texture during gameplay."
            resettable={rotateCursor}
        />
    );
}
