import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Color?.MenuItemSelectedTextColor);
});

resettable.setJsonSaveHandler(function (json) {
    if (!validateColor(this.value)) {
        throw createColorError(
            `The text color for a selected beatmap card (${this.value}) is invalid`
        );
    }

    if (!this.isDefault) {
        json.Color ??= {};
        json.Color.MenuItemSelectedTextColor = this.value;
    }
});

export const MenuItemSelectedTextColorContext = createContext(
    resettable.clone()
);

export function MenuItemSelectedTextColorContextProvider(
    props: PropsWithChildren
) {
    return (
        <MenuItemSelectedTextColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemSelectedTextColorContext.Provider>
    );
}
