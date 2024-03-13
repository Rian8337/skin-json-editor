import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ForceOverrideContext } from "./ForceOverrideContext";
import { createColorError, validateColor } from "../../utils/validators";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = ["#FFFFFF"];

export const ComboColorsContext = createContext(
    createJSONResettable(defaultValue)
);

export function ComboColorsContextProvider(props: PropsWithChildren) {
    const forceOverride = useContext(ForceOverrideContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <ComboColorsContext.Provider
            value={{
                defaultValue,
                value,
                get isDefault() {
                    return (
                        value.length === defaultValue.length &&
                        value.every((v, i) => v === defaultValue[i])
                    );
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(value);
                },
                saveToJSON(json) {
                    if (!forceOverride.value) {
                        return;
                    }

                    json.ComboColor ??= {};

                    for (const color of value) {
                        if (!validateColor(color)) {
                            throw createColorError(
                                `The hex color "${color}" in combo colors is invalid`
                            );
                        }

                        json.ComboColor.colors ??= [];
                        json.ComboColor.colors.push(color);
                    }
                },
            }}
        >
            {props.children}
        </ComboColorsContext.Provider>
    );
}
