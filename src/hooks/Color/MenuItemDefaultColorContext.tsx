import { PropsWithChildren, createContext, useState } from "react";
import { createColorError, validateColor } from "../../utils/validators";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = undefined as string | undefined;

export const MenuItemDefaultColorContext = createContext(
    createResettable(defaultValue)
);

export function MenuItemDefaultColorContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <MenuItemDefaultColorContext.Provider
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
                            `The default color for an unselected beatmapset card (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Color ??= {};
                        json.Color.MenuItemDefaultColor = value;
                    }
                },
            }}
        >
            {props.children}
        </MenuItemDefaultColorContext.Provider>
    );
}
