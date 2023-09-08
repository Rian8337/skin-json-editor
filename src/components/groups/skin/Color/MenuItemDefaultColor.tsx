import { useContext } from "react";
import { MenuItemDefaultColorContext } from "../../../../hooks/Color/MenuItemDefaultColorContext";
import SingleColorEditor from "../../../editors/SingleColorEditor";

export default function MenuItemDefaultColor() {
    const ctx = useContext(MenuItemDefaultColorContext);

    return (
        <SingleColorEditor
            title="Unselected Color"
            description="The color of a beatmapset card when it is not selected."
            resettable={ctx}
        />
    );
}
