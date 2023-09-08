import { PropsWithChildren, createContext, useState } from "react";
import { createNumberResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const OptionsButtonWidthContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function OptionsButtonWidthContextProvider(props: PropsWithChildren) {
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
                    if (!this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.useNewLayout = true;

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
