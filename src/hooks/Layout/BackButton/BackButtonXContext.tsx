import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../../utils/ResettableFactory";

const defaultValue = 0;
const minValue = 0;

export const BackButtonXContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function BackButtonXContextProvider(props: PropsWithChildren) {
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
                    if (!this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.useNewLayout = true;

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
