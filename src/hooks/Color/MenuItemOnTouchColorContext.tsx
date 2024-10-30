import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Color?.MenuItemOnTouchColor;

resettable.jsonPropertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(
            `The color for an unselected beatmapset card when it is tapped on (${value}) is invalid`
        );
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Color ??= {};
    json.Color.MenuItemOnTouchColor = this.value;
};

export const MenuItemOnTouchColorContext = createContext(resettable.clone());

export function MenuItemOnTouchColorContextProvider(props: PropsWithChildren) {
    return (
        <MenuItemOnTouchColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemOnTouchColorContext.Provider>
    );
}
