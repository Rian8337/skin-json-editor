import { PropsWithChildren, createContext, useState } from "react";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = "score";

export const ComboPrefixContext = createContext(
    createJSONResettable(defaultValue)
);

export function ComboPrefixContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ComboPrefixContext.Provider
            value={{
                defaultValue,
                value,
                get isDefault() {
                    return value === defaultValue;
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(value);
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Fonts ??= {};
                        json.Fonts.comboPrefix = value;
                    }
                },
            }}
        >
            {props.children}
        </ComboPrefixContext.Provider>
    );
}
