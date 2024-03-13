import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "../../utils/validators";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = undefined as string | undefined;

export const MenuItemOnTouchColorContext = createContext(
    createJSONResettable(defaultValue)
);

export function MenuItemOnTouchColorContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <MenuItemOnTouchColorContext.Provider
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
                            `The color for an unselected beatmapset card when it is tapped on (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Color ??= {};
                        json.Color.MenuItemOnTouchColor = value;
                    }
                },
            }}
        >
            {props.children}
        </MenuItemOnTouchColorContext.Provider>
    );
}
