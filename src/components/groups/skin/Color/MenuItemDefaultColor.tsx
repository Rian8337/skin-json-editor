import { useContext } from "react";
import { MenuItemDefaultColorContext } from "../../../../hooks/Color/MenuItemDefaultColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function MenuItemDefaultColor() {
    const ctx = useContext(MenuItemDefaultColorContext);

    return (
        <ColorEditor
            title="Unselected Color"
            description="The color of a beatmapset card when it is not selected."
            resettable={ctx}
        />
    );
}
