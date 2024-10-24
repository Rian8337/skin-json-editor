import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.setJsonSaveHandler(function (json) {
    if (!validateColor(this.value)) {
        throw createColorError(
            `The color for a selected beatmap card (${this.value}) is invalid`
        );
    }

    if (!this.isDefault) {
        json.Color ??= {};
        json.Color.MenuItemVersionsSelectedColor = this.value;
    }
});

export const MenuItemVersionsSelectedColorContext = createContext(
    resettable.clone()
);

export function MenuItemVersionsSelectedColorContextProvider(
    props: PropsWithChildren
) {
    return (
        <MenuItemVersionsSelectedColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemVersionsSelectedColorContext.Provider>
    );
}
