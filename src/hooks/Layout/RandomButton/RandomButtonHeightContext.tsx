import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const RandomButtonHeightContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function RandomButtonHeightContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RandomButtonHeightContext.Provider
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
                        json.Layout.RandomButton.h = value;
                    }
                },
            }}
        >
            {props.children}
        </RandomButtonHeightContext.Provider>
    );
}
