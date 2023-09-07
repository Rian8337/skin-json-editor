import { useContext } from "react";
import Group from "../../Group";
import SubGroup from "../../SubGroup";
import LayoutBackButton from "./LayoutBackButton";
import LayoutModsButton from "./LayoutModsButton";
import LayoutOptionsButton from "./LayoutOptionsButton";
import LayoutRandomButton from "./LayoutRandomButton";
import { UseNewLayoutContext } from "../../../../hooks/Layout/UseNewLayoutContext";
import CheckBoxEditor from "../../../editors/CheckBoxEditor";

export default function LayoutGroup() {
    const useNewLayout = useContext(UseNewLayoutContext);

    return (
        <Group title="Song Selection Menu Buttons">
            <hr />

            <CheckBoxEditor
                title="Enable Customization"
                description="Allows the customization of the back, mods, options, and random buttons in the song selection menu."
                resettable={useNewLayout}
            />

            {useNewLayout.value ? (
                <>
                    <hr />
                    <div className="group-description">
                        There are the same options for each button, namely:
                        <ul>
                            <li>
                                <b>Width</b>
                                <br />
                                Specifies the width of the button, in pixels.
                                Use -1 to use the width of the button&apos;s
                                texture.
                            </li>
                            <br />
                            <li>
                                <b>Height</b>
                                <br />
                                Specifies the height of the button, in pixels.
                                Use -1 to use the height of the button&apos;s
                                texture.
                            </li>
                            <br />
                            <li>
                                <b>Scale</b>
                                <br />
                                Increasing this number increases the size of the
                                button, and vice versa.
                            </li>
                            <br />
                            <li>
                                <b>Horizontal Offset</b>
                                <br />
                                The horizontal offset of the button from the
                                left of the screen, in pixels.
                            </li>
                            <br />
                            <li>
                                <b>Vertical Offset</b>
                                <br />
                                The vertical offset of the button from the
                                bottom of the screen, in pixels.
                            </li>
                        </ul>
                    </div>

                    <SubGroup title="Back Button">
                        <LayoutBackButton />
                    </SubGroup>

                    <SubGroup title="Mods Button">
                        <LayoutModsButton />
                    </SubGroup>

                    <SubGroup title="Options Button">
                        <LayoutOptionsButton />
                    </SubGroup>

                    <SubGroup title="Random Button">
                        <LayoutRandomButton />
                    </SubGroup>
                </>
            ) : null}
        </Group>
    );
}
