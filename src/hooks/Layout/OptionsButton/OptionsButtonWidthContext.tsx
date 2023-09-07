import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createNumberResettable } from "../../../utils/ResettableFactory";
import { UseNewLayoutContext } from "../UseNewLayoutContext";

const defaultValue = -1;
const minValue = -1;

export const OptionsButtonWidthContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function OptionsButtonWidthContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <OptionsButtonWidthContext.Provider
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
                        json.Layout.OptionsButton.w = value;
                    }
                },
            }}
        >
            {props.children}
        </OptionsButtonWidthContext.Provider>
    );
}
