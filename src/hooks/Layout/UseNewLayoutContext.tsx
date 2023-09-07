import { PropsWithChildren, createContext, useState } from "react";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = false;

export const UseNewLayoutContext = createContext(
    createResettable(defaultValue)
);

export function UseNewLayoutContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <UseNewLayoutContext.Provider
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
                        json.Layout.useNewLayout = value;
                    }
                },
            }}
        >
            {props.children}
        </UseNewLayoutContext.Provider>
    );
}
