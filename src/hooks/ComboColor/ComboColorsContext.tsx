import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ForceOverrideContext } from "./ForceOverrideContext";
import { createColorError, validateColor } from "@utils/validators";
import { ArrayResettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";
import { SkinIniSection } from "constants/SkinIniSection";

const resettable = new ArrayResettable(["#FFFFFF"]);

resettable.jsonPropertyGetter = (json) => json.ComboColor?.colors;

resettable.iniPropertyGetter = (ini) => {
    const colors: string[] = [];

    // osu! skins supports up to 7 combo colors
    for (let i = 0; i < 8; ++i) {
        const color = ini.get(SkinIniSection.colors, `Combo${i + 1}`);

        if (!color) {
            continue;
        }

        // Convert from RGB to hex
        colors.push(rgbToHex(color));
    }

    return colors;
};

resettable.propertyValidator = (value) => {
    for (const c of value) {
        if (!validateColor(c)) {
            throw createColorError(
                `The hex color "${c}" in combo colors is invalid`
            );
        }
    }
};

export const ComboColorsContext = createContext(resettable.clone());

export function ComboColorsContextProvider(props: PropsWithChildren) {
    const forceOverride = useContext(ForceOverrideContext);

    resettable.jsonSaveHandler = function (json) {
        if (!forceOverride.value) {
            return;
        }

        json.ComboColor ??= {};
        json.ComboColor.colors = this.value;
    };

    return (
        <ComboColorsContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboColorsContext.Provider>
    );
}
