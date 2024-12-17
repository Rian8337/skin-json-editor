import { SkinIniSection } from "@constants/SkinIniSection";
import { Resettable } from "@structures/resettable";
import { PropsWithChildren, createContext, useState } from "react";

const resettable = new Resettable("default");

resettable.jsonPropertyGetter = (json) => json.Fonts?.hitCirclePrefix;

resettable.iniPropertyGetter = (ini) =>
    ini.get(SkinIniSection.fonts, "HitCirclePrefix") ?? resettable.defaultValue;

resettable.jsonSaveHandler = function (json) {
    json.Fonts ??= {};
    json.Fonts.hitCirclePrefix = this.value;
};

export const HitCirclePrefixContext = createContext(resettable.clone());

export function HitCirclePrefixContextProvider(props: PropsWithChildren) {
    return (
        <HitCirclePrefixContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </HitCirclePrefixContext.Provider>
    );
}
