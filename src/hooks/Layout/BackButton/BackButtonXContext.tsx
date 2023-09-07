import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UseNewLayoutContext } from "../UseNewLayoutContext";
import { createNumberResettable } from "../../../utils/ResettableFactory";

const defaultValue = 0;
const minValue = 0;

export const BackButtonXContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function BackButtonXContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <BackButtonXContext.Provider
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
                        json.Layout.BackButton ??= {};
                        json.Layout.BackButton.x = value;
                    }
                },
            }}
        >
            {props.children}
        </BackButtonXContext.Provider>
    );
}
