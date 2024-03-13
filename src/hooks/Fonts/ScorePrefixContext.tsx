import { PropsWithChildren, createContext, useState } from "react";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = "score";

export const ScorePrefixContext = createContext(
    createJSONResettable(defaultValue)
);

export function ScorePrefixContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ScorePrefixContext.Provider
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
                        json.Fonts.scorePrefix = value;
                    }
                },
            }}
        >
            {props.children}
        </ScorePrefixContext.Provider>
    );
}
