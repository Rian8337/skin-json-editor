import { SkinIniSection } from "@constants/SkinIniSection";
import { Resettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";
import { createColorError, validateColor } from "@utils/validators";
import { PropsWithChildren, createContext, useState } from "react";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Color?.MenuItemSelectedTextColor;

resettable.iniPropertyGetter = (ini) => {
    const color = ini.get(SkinIniSection.colors, "SongSelectActiveText");

    if (!color) {
        return "#FFFFFF";
    }

    return rgbToHex(color);
};

resettable.propertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(
            `The text color for a selected beatmap card (${value}) is invalid`,
        );
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Color ??= {};
    json.Color.MenuItemSelectedTextColor = this.value;
};

export const MenuItemSelectedTextColorContext = createContext(
    resettable.clone(),
);

export function MenuItemSelectedTextColorContextProvider(
    props: PropsWithChildren,
) {
    return (
        <MenuItemSelectedTextColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </MenuItemSelectedTextColorContext.Provider>
    );
}
