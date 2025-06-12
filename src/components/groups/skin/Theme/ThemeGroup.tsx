import Group from "@components/groups/Group";
import ThemeAccentColor from "./ThemeAccentColor";

export default function ThemeGroup() {
    return (
        <Group title="Theme" collapsible>
            <ThemeAccentColor />
        </Group>
    );
}
