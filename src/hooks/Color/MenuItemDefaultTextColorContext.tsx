import { PropsWithChildren, createContext, useState } from "react";
import { validateColor, createColorError } from "@utils/validators";
import { Resettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Color?.MenuItemDefaultTextColor;

resettable.iniPropertyGetter = (ini) => {
    const color = ini.get("Colours", "SongSelectInactiveText");

    if (!color) {
        return "#000000";
    }

    return rgbToHex(color);
};

resettable.propertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(
            `The default text color for an unselected beatmap card (${value}) is invalid`
        );
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Color ??= {};
    json.Color.MenuItemDefaultTextColor = this.value;
};

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
