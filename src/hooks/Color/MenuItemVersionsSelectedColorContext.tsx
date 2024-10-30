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
    json.Color.MenuItemVersionsSelectedColor = this.value;
};

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
