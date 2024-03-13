import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../../utils/ResettableFactory";

const defaultValue = 0;
const minValue = 0;

export const ModsButtonXContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function ModsButtonXContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ModsButtonXContext.Provider
            value={{
                defaultValue,
                value,
                minValue,
                get isDefault() {
                    return value === defaultValue;
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(Math.max(value, minValue));
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.useNewLayout = true;

                        json.Layout.ModsButton ??= {};
                        json.Layout.ModsButton.x = value;
                    }
                },
            }}
        >
            {props.children}
        </ModsButtonXContext.Provider>
    );
}
