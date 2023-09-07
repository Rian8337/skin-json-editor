import { PropsWithChildren, createContext, useState } from "react";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = false;

export const ForceOverrideContext = createContext(
    createResettable(defaultValue)
);

export function ForceOverrideContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ForceOverrideContext.Provider
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
                saveToJSON: (json) => {
                    if (value) {
                        json.ComboColor ??= {};
                        json.ComboColor.forceOverride = value;
                    }
                },
            }}
        >
            {props.children}
        </ForceOverrideContext.Provider>
    );
}
