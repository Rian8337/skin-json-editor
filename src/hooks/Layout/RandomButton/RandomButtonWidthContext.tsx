import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const RandomButtonWidthContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function RandomButtonWidthContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RandomButtonWidthContext.Provider
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
                    if (value < 0 && value !== defaultValue) {
                        setValue(defaultValue);
                        return;
                    }

                    setValue(value);
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.useNewLayout = true;

                        json.Layout.RandomButton ??= {};
                        json.Layout.RandomButton.w = value;
                    }
                },
            }}
        >
            {props.children}
        </RandomButtonWidthContext.Provider>
    );
}
