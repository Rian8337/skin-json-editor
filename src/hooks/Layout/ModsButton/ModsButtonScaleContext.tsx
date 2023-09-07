import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UseNewLayoutContext } from "../UseNewLayoutContext";
import { createNumberResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const ModsButtonScaleContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function ModsButtonScaleContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <ModsButtonScaleContext.Provider
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
                        json.Layout.ModsButton ??= {};
                        json.Layout.ModsButton.scale = value;
                    }
                },
            }}
        >
            {props.children}
        </ModsButtonScaleContext.Provider>
    );
}
