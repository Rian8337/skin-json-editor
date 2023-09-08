import { useContext } from "react";
import { MenuItemVersionsSelectedColorContext } from "../../../../hooks/Color/MenuItemVersionsSelectedColorContext";
import SingleColorEditor from "../../../editors/SingleColorEditor";

export default function MenuItemVersionsSelectedColor() {
    const ctx = useContext(MenuItemVersionsSelectedColorContext);

    return (
        <SingleColorEditor
            title="Selected Card Color"
            description="The color of a beatmap card when it is selected."
            resettable={ctx}
        />
    );
}
