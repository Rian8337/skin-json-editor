import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.setJsonSaveHandler(function (json) {
    if (!validateColor(this.value)) {
        throw createColorError(
            `The color for an unselected beatmapset card when it is tapped on (${this.value}) is invalid`
        );
    }

    if (!this.isDefault) {
        json.Color ??= {};
        json.Color.MenuItemOnTouchColor = this.value;
    }
});

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
