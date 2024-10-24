import { useContext } from "react";
import { SingleColorEditor } from "@components/editors";
import { MenuItemSelectedTextColorContext } from "@hooks/Color";

export default function MenuItemSelectedTextColor() {
    const ctx = useContext(MenuItemSelectedTextColorContext);

    return (
        <SingleColorEditor
            title="Selected Text Color"
            description="The color of the text inside a beatmap card when it is selected."
            resettable={ctx}
        />
    );
}
