import { PropsWithChildren, createContext, useState } from "react";
import { createJSONResettable } from "../../../utils/ResettableFactory";

const defaultValue = true;

export const BackButtonScaleWhenHoldContext = createContext(
    createJSONResettable(defaultValue)
);

export function BackButtonScaleWhenHoldContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <BackButtonScaleWhenHoldContext.Provider
            value={{
                defaultValue,
                value,
                get isDefault() {
                    return value === defaultValue;
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(value);
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.useNewLayout = true;

                        json.Layout.BackButton ??= {};
                        json.Layout.BackButton.scaleWhenHold = value;
                    }
                },
            }}
        >
            {props.children}
        </BackButtonScaleWhenHoldContext.Provider>
    );
}
