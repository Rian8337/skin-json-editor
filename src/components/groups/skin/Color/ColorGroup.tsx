import Group from "@components/groups/Group";
import SubGroup from "@components/groups/SubGroup";
import MenuItemDefaultColor from "./MenuItemDefaultColor";
import MenuItemDefaultTextColor from "./MenuItemDefaultTextColor";
import MenuItemOnTouchColor from "./MenuItemOnTouchColor";
import MenuItemSelectedTextColor from "./MenuItemSelectedTextColor";
import MenuItemVersionsDefaultColor from "./MenuItemVersionsDefaultColor";
import MenuItemVersionsSelectedColor from "./MenuItemVersionsSelectedColor";

export default function ColorGroup() {
    return (
        <Group title="Song Selection Menu Beatmap(set) Cards" collapsible>
            <SubGroup title="Beatmapset Card" withEditorContainer>
                <MenuItemDefaultColor />
                <MenuItemOnTouchColor />
            </SubGroup>

            <SubGroup title="Beatmap Card" withEditorContainer>
                <MenuItemVersionsDefaultColor />
                <MenuItemDefaultTextColor />
                <MenuItemVersionsSelectedColor />
                <MenuItemSelectedTextColor />
            </SubGroup>
        </Group>
    );
}
