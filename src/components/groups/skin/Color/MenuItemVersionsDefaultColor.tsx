import { useContext } from "react";
import { MenuItemVersionsDefaultColorContext } from "@hooks/Color";
import SingleColorEditor from "@components/editors/SingleColorEditor";

export default function MenuItemVersionsDefaultColor() {
    const ctx = useContext(MenuItemVersionsDefaultColorContext);

    return (
        <SingleColorEditor
            title="Unselected Card Color"
            description="The color of a beatmap card when it is unselected."
            resettable={ctx}
        />
    );
}
