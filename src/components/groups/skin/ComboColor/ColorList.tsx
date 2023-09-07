import { useContext, useState } from "react";
import { ComboColorsContext } from "../../../../hooks/ComboColor/ComboColorsContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function ColorList() {
    const ctx = useContext(ComboColorsContext);

    // Introduce additional hooks to convert the value from an array.
    const defaultValue = ctx.defaultValue[0];
    const [value, setValue] = useState(defaultValue);

    const modifyValue = (value = defaultValue) => {
        setValue(value);

        ctx.setValue(value.split(",").map((v) => v.trim()));
    };

    const resetValue = () => {
        setValue(defaultValue);

        ctx.reset();
    };

    return (
        <ColorEditor
            title="Combo Colors"
            description="The color order will determine the color appearance order in-game."
            inputLabel="Colors"
            acceptMultipleColors={true}
            resettable={{
                defaultValue,
                value,
                reset: resetValue,
                isDefault: ctx.isDefault,
                setValue: modifyValue,
                saveToJSON: (json) => {
                    ctx.saveToJSON(json);
                },
            }}
        />
    );
}
