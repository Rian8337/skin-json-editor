import { PropsWithChildren, createContext, useState } from "react";
import { createNumberResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const RandomButtonScaleContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function RandomButtonScaleContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RandomButtonScaleContext.Provider
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
                        json.Layout.RandomButton.scale = value;
                    }
                },
            }}
        >
            {props.children}
        </RandomButtonScaleContext.Provider>
    );
}
