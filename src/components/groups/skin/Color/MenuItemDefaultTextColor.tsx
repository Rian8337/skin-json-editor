import { useContext } from "react";
import { MenuItemDefaultTextColorContext } from "@hooks/Color";
import { SingleColorEditor } from "@components/editors";

export default function MenuItemDefaultTextColor() {
    const ctx = useContext(MenuItemDefaultTextColorContext);

    return (
        <SingleColorEditor
            title="Unselected Text Color"
            description="The color of the text inside a beatmap card when it is unselected."
            resettable={ctx}
        />
    );
}
