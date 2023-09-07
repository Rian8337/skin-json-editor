import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createNumberResettable } from "../../../utils/ResettableFactory";
import { UseNewLayoutContext } from "../UseNewLayoutContext";

const defaultValue = 0;
const minValue = 0;

export const RandomButtonYContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function RandomButtonYContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <RandomButtonYContext.Provider
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
                    if (useNewLayout.value && !this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.RandomButton ??= {};
                        json.Layout.RandomButton.y = value;
                    }
                },
            }}
        >
            {props.children}
        </RandomButtonYContext.Provider>
    );
}
