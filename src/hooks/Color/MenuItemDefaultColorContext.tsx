import { PropsWithChildren, createContext, useState } from "react";
import { createColorError, validateColor } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Color?.MenuItemDefaultColor;

// osu!stable's inactive color
resettable.iniPropertyGetter = () => "#EB4999";

resettable.propertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(
            `The default color for an unselected beatmapset card (${value}) is invalid`
        );
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Color ??= {};
    json.Color.MenuItemDefaultColor = this.value;
};

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
