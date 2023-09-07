import { useContext } from "react";
import { MenuItemVersionsSelectedColorContext } from "../../../../hooks/Color/MenuItemVersionsSelectedColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function MenuItemVersionsSelectedColor() {
    const ctx = useContext(MenuItemVersionsSelectedColorContext);

    return (
        <ColorEditor
            title="Selected Card Color"
            description="The color of a beatmap card when it is selected."
            resettable={ctx}
        />
    );
}
