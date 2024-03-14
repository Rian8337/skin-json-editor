import { useContext } from "react";
import { ComboColorsContext } from "../../../../hooks/ComboColor/ComboColorsContext";
import MultipleColorEditor from "../../../editors/MultipleColorEditor";

export default function ColorList() {
    const ctx = useContext(ComboColorsContext);

    return (
        <MultipleColorEditor
            title="Combo Colors"
            description="The order from top to bottom will determine the order of appearance in-game."
            inputLabel="Colors"
            resettable={ctx}
        />
    );
}
