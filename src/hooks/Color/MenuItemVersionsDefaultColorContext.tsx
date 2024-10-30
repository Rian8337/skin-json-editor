import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) =>
    json.Color?.MenuItemVersionsDefaultColor;

resettable.jsonPropertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(
            `The color for an unselected beatmap card (${value}) is invalid`
        );
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Color ??= {};
    json.Color.MenuItemVersionsDefaultColor = this.value;
};

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
