import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createNumberResettable } from "../../../utils/ResettableFactory";
import { UseNewLayoutContext } from "../UseNewLayoutContext";

const defaultValue = 0;
const minValue = 0;

export const OptionsButtonYContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function OptionsButtonYContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <OptionsButtonYContext.Provider
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
                        json.Layout.OptionsButton ??= {};
                        json.Layout.OptionsButton.h = value;
                    }
                },
            }}
        >
            {props.children}
        </OptionsButtonYContext.Provider>
    );
}
