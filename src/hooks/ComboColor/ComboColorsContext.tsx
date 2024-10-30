import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ForceOverrideContext } from "./ForceOverrideContext";
import { createColorError, validateColor } from "@utils/validators";
import { ArrayResettable } from "@structures/resettable";

const resettable = new ArrayResettable(["#FFFFFF"]);

resettable.jsonPropertyGetter = (json) => json.ComboColor?.colors;

resettable.jsonPropertyValidator = (value) => {
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
