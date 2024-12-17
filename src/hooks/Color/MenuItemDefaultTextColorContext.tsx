import { SkinIniSection } from "@constants/SkinIniSection";
import { Resettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";
import { createColorError, validateColor } from "@utils/validators";
import { PropsWithChildren, createContext, useState } from "react";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Color?.MenuItemDefaultTextColor;

resettable.iniPropertyGetter = (ini) => {
    const color = ini.get(SkinIniSection.colors, "SongSelectInactiveText");

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
