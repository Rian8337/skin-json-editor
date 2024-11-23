import Group from "@components/groups/Group";
import RotateCursor from "./RotateCursor";
import RotateCursorTrail from "./RotateCursorTrail";
import EditorContainer from "@components/editors/EditorContainer";

export default function CursorGroup() {
    return (
        <Group title="Cursor" collapsible>
            <EditorContainer>
                <RotateCursor />
                <RotateCursorTrail />
            </EditorContainer>
        </Group>
    );
}
