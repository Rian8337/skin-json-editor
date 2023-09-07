import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UseNewLayoutContext } from "../UseNewLayoutContext";
import { createNumberResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const OptionsButtonHeightContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function OptionsButtonHeightContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <OptionsButtonHeightContext.Provider
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
                    if (useNewLayout.value && !this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.OptionsButton ??= {};
                        json.Layout.OptionsButton.h = value;
                    }
                },
            }}
        >
            {props.children}
        </OptionsButtonHeightContext.Provider>
    );
}
