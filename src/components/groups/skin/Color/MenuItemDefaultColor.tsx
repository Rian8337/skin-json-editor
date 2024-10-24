import { useContext } from "react";
import { MenuItemDefaultColorContext } from "@hooks/Color";
import { SingleColorEditor } from "@components/editors";

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
