import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ForceOverrideContext } from "./ForceOverrideContext";
import { createColorError, validateColor } from "@utils/validators";
import { ArrayResettable } from "@structures/resettable/ArrayResettable";

const resettable = new ArrayResettable(["#FFFFFF"]);

export const ComboColorsContext = createContext(resettable.clone());

export function ComboColorsContextProvider(props: PropsWithChildren) {
    const forceOverride = useContext(ForceOverrideContext);

    resettable.setJsonSaveHandler(function (json) {
        if (!forceOverride.value) {
            return;
        }

        json.ComboColor ??= {};

        for (const color of this.value) {
            if (!validateColor(color)) {
                throw createColorError(
                    `The hex color "${color}" in combo colors is invalid`
                );
            }

            json.ComboColor.colors ??= [];
            json.ComboColor.colors.push(color);
        }
    });

    return (
        <ComboColorsContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboColorsContext.Provider>
    );
}
