import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.setJsonSaveHandler(function (json) {
    if (!validateColor(this.value)) {
        throw createColorError(
            `The color for an unselected beatmap card (${this.value}) is invalid`
        );
    }

    if (!this.isDefault) {
        json.Color ??= {};
        json.Color.MenuItemVersionsDefaultColor = this.value;
    }
});

export const MenuItemVersionsDefaultColorContext = createContext(
    resettable.clone()
);

export function MenuItemVersionsDefaultColorContextProvider(
    props: PropsWithChildren
) {
    return (
        <MenuItemVersionsDefaultColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemVersionsDefaultColorContext.Provider>
    );
}
