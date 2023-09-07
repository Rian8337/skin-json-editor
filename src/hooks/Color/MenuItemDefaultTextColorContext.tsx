import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "../../utils/validators";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = undefined as string | undefined;

export const MenuItemDefaultTextColorContext = createContext(
    createResettable(defaultValue)
);

export function MenuItemDefaultTextColorContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <MenuItemDefaultTextColorContext.Provider
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
                            `The default text color for an unselected beatmap card (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Color ??= {};
                        json.Color.MenuItemDefaultTextColor = value;
                    }
                },
            }}
        >
            {props.children}
        </MenuItemDefaultTextColorContext.Provider>
    );
}
