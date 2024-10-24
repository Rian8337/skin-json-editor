import CheckBoxEditor from "@components/editors/CheckBoxEditor";
import { RotateCursorContext } from "@hooks/Cursor/RotateCursorContext";
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
