import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "../../utils/validators";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = undefined as string | undefined;

export const MenuItemSelectedTextColorContext = createContext(
    createResettable(defaultValue)
);

export function MenuItemSelectedTextColorContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <MenuItemSelectedTextColorContext.Provider
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
                    if (!validateColor(value)) {
                        throw createColorError(
                            `The text color for a selected beatmap card (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Color ??= {};
                        json.Color.MenuItemSelectedTextColor = value;
                    }
                },
            }}
        >
            {props.children}
        </MenuItemSelectedTextColorContext.Provider>
    );
}
