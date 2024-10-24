import { useContext } from "react";
import { MenuItemOnTouchColorContext } from "@hooks/Color";
import { SingleColorEditor } from "@components/editors";

export default function MenuItemOnTouchColor() {
    const ctx = useContext(MenuItemOnTouchColorContext);

    return (
        <SingleColorEditor
            title="Selected Color"
            description="The color of a beatmapset card when it is selected."
            resettable={ctx}
        />
    );
}
