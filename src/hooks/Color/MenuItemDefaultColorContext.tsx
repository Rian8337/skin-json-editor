import { PropsWithChildren, createContext, useState } from "react";
import { createColorError, validateColor } from "@utils/validators";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.setJsonSaveHandler(function (json) {
    if (!validateColor(this.value)) {
        throw createColorError(
            `The default color for an unselected beatmapset card (${this.value}) is invalid`
        );
    }

    if (!this.isDefault) {
        json.Color ??= {};
        json.Color.MenuItemDefaultColor = this.value;
    }
});

export const MenuItemDefaultColorContext = createContext(resettable.clone());

export function MenuItemDefaultColorContextProvider(props: PropsWithChildren) {
    return (
        <MenuItemDefaultColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemDefaultColorContext.Provider>
    );
}
