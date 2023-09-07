import { useContext } from "react";
import { MenuItemDefaultTextColorContext } from "../../../../hooks/Color/MenuItemDefaultTextColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function MenuItemDefaultTextColor() {
    const ctx = useContext(MenuItemDefaultTextColorContext);

    return (
        <ColorEditor
            title="Unselected Text Color"
            description="The color of the text inside a beatmap card when it is unselected."
            resettable={ctx}
        />
    );
}
