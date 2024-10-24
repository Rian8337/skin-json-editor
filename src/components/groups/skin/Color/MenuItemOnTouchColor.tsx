import { useContext } from "react";
import { MenuItemOnTouchColorContext } from "@hooks/Color/MenuItemOnTouchColorContext";
import SingleColorEditor from "@components/editors/SingleColorEditor";

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
