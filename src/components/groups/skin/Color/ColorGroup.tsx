import Group from "../../Group";
import SubGroup from "../../SubGroup";
import MenuItemDefaultColor from "./MenuItemDefaultColor";
import MenuItemDefaultTextColor from "./MenuItemDefaultTextColor";
import MenuItemOnTouchColor from "./MenuItemOnTouchColor";
import MenuItemSelectedTextColor from "./MenuItemSelectedTextColor";
import MenuItemVersionsDefaultColor from "./MenuItemVersionsDefaultColor";
import MenuItemVersionsSelectedColor from "./MenuItemVersionsSelectedColor";

export default function ColorGroup() {
    return (
        <Group
            title="Song Selection Menu Beatmap(set) Cards"
            collapsible={true}
        >
            <SubGroup title="Beatmapset Card">
                <MenuItemDefaultColor />
                <MenuItemOnTouchColor />
            </SubGroup>

            <SubGroup title="Beatmap Card">
                <MenuItemVersionsDefaultColor />
                <MenuItemDefaultTextColor />
                <MenuItemVersionsSelectedColor />
                <MenuItemSelectedTextColor />
            </SubGroup>
        </Group>
    );
}
