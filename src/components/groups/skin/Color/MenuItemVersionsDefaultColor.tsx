import { useContext } from "react";
import { MenuItemVersionsDefaultColorContext } from "../../../../hooks/Color/MenuItemVersionsDefaultColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function MenuItemVersionsDefaultColor() {
    const ctx = useContext(MenuItemVersionsDefaultColorContext);

    return (
        <ColorEditor
            title="Unselected Card Color"
            description="The color of a beatmap card when it is unselected."
            resettable={ctx}
        />
    );
}
