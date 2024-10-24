import Group from "@components/groups/Group";
import RotateCursor from "./RotateCursor";

export default function CursorGroup() {
    return (
        <Group title="Cursor" collapsible>
            <RotateCursor />
        </Group>
    );
}
