import { PropsWithChildren, createContext, useState } from "react";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = "default";

export const HitCirclePrefixContext = createContext(
    createJSONResettable(defaultValue)
);

export function HitCirclePrefixContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <HitCirclePrefixContext.Provider
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
                        json.Fonts.hitCirclePrefix = value;
                    }
                },
            }}
        >
            {props.children}
        </HitCirclePrefixContext.Provider>
    );
}
