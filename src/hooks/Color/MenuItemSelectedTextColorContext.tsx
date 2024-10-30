import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Color?.MenuItemSelectedTextColor;

resettable.jsonPropertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(
            `The text color for a selected beatmap card (${value}) is invalid`
        );
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Color ??= {};
    json.Color.MenuItemSelectedTextColor = this.value;
};

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
