import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.setJsonSaveHandler(function (json) {
    if (!validateColor(this.value)) {
        throw createColorError(
            `The default text color for an unselected beatmap card (${this.value}) is invalid`
        );
    }

    if (!this.isDefault) {
        json.Color ??= {};
        json.Color.MenuItemDefaultTextColor = this.value;
    }
});

export const MenuItemDefaultTextColorContext = createContext(
    resettable.clone()
);

export function MenuItemDefaultTextColorContextProvider(
    props: PropsWithChildren
) {
    return (
        <MenuItemDefaultTextColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemDefaultTextColorContext.Provider>
    );
}
