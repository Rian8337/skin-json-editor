import { useContext } from "react";
import ColorEditor from "../../../editors/ColorEditor";
import { MenuItemSelectedTextColorContext } from "../../../../hooks/Color/MenuItemSelectedTextColorContext";

export default function MenuItemSelectedTextColor() {
    const ctx = useContext(MenuItemSelectedTextColorContext);

    return (
        <ColorEditor
            title="Selected Text Color"
            description="The color of the text inside a beatmap card when it is selected."
            resettable={ctx}
        />
    );
}
