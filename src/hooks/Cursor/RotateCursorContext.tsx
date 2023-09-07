import { PropsWithChildren, createContext, useState } from "react";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = true;

export const RotateCursorContext = createContext(
    createResettable(defaultValue)
);

export function RotateCursorContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <RotateCursorContext.Provider
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
                        json.Cursor ??= {};
                        json.Cursor.rotateCursor = value;
                    }
                },
            }}
        >
            {props.children}
        </RotateCursorContext.Provider>
    );
}
