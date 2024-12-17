import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";
import { SkinIniSection } from "constants/SkinIniSection";

const resettable = new NumberResettable({ defaultValue: -2 });

resettable.jsonPropertyGetter = (json) => json.Fonts?.hitCircleOverlap;

resettable.iniPropertyGetter = (ini) => {
    const hitCircleOverlap = ini.get(SkinIniSection.fonts, "HitCircleOverlap");

    if (!hitCircleOverlap) {
        return resettable.defaultValue;
    }

    return parseFloat(hitCircleOverlap);
};

resettable.jsonSaveHandler = function (json) {
    json.Fonts ??= {};
    json.Fonts.hitCircleOverlap = this.value;
};

export const HitCircleOverlapContext = createContext(resettable.clone());

export function HitCircleOverlapContextProvider(props: PropsWithChildren) {
    return (
        <HitCircleOverlapContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </HitCircleOverlapContext.Provider>
    );
}
