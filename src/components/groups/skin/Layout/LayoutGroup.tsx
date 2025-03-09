import Group from "../../Group";
import SubGroup from "../../SubGroup";
import LayoutBackButton from "./LayoutBackButton";
import LayoutModsButton from "./LayoutModsButton";
import LayoutOptionsButton from "./LayoutOptionsButton";
import LayoutRandomButton from "./LayoutRandomButton";

export default function LayoutGroup() {
    return (
        <Group title="Song Selection Menu Buttons" collapsible>
            <p className="pb-2">
                There are the same options for each button, namely:
                <br />
                <ul>
                    <li>
                        <b>Width</b>
                        <br />
                        Specifies the width of the button, in pixels. Use -1 to
                        use the width of the button&apos;s texture.
                    </li>
                    <br />
                    <li>
                        <b>Height</b>
                        <br />
                        Specifies the height of the button, in pixels. Use -1 to
                        use the height of the button&apos;s texture.
                    </li>
                    <br />
                    <li>
                        <b>Scale</b>
                        <br />
                        Increasing this number increases the size of the button,
                        and vice versa.
                    </li>
                    <br />
                    <li>
                        <b>Horizontal Offset</b>
                        <br />
                        The horizontal offset of the button from the left of the
                        screen, in pixels.
                    </li>
                    <br />
                    <li>
                        <b>Vertical Offset</b>
                        <br />
                        The vertical offset of the button from the bottom of the
                        screen, in pixels.
                    </li>
                </ul>
            </p>

            <SubGroup title="Back Button" withEditorContainer>
                <LayoutBackButton />
            </SubGroup>

            <SubGroup title="Mods Button" withEditorContainer>
                <LayoutModsButton />
            </SubGroup>

            <SubGroup title="Options Button" withEditorContainer>
                <LayoutOptionsButton />
            </SubGroup>

            <SubGroup title="Random Button" withEditorContainer>
                <LayoutRandomButton />
            </SubGroup>
        </Group>
    );
}
