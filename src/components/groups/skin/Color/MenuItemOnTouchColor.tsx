import { useContext } from "react";
import { MenuItemOnTouchColorContext } from "../../../../hooks/Color/MenuItemOnTouchColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function MenuItemOnTouchColor() {
    const ctx = useContext(MenuItemOnTouchColorContext);

    return (
        <ColorEditor
            title="Selected Color"
            description="The color of a beatmapset card when it is selected."
            resettable={ctx}
        />
    );
}
