import { PropsWithChildren, createContext, useState } from "react";
import { createNumberResettable } from "../../../utils/ResettableFactory";

const defaultValue = 0;
const minValue = 0;

export const RandomButtonXContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function RandomButtonXContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RandomButtonXContext.Provider
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

                        json.Layout.RandomButton ??= {};
                        json.Layout.RandomButton.x = value;
                    }
                },
            }}
        >
            {props.children}
        </RandomButtonXContext.Provider>
    );
}
