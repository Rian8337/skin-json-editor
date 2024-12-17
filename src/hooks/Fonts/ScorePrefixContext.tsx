import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";
import { SkinIniSection } from "constants/SkinIniSection";

const resettable = new Resettable("score");

resettable.jsonPropertyGetter = (json) => json.Fonts?.scorePrefix;

resettable.iniPropertyGetter = (ini) =>
    ini.get(SkinIniSection.fonts, "ScorePrefix") ?? resettable.defaultValue;

resettable.jsonSaveHandler = function (json) {
    json.Fonts ??= {};
    json.Fonts.scorePrefix = this.value;
};

export const ScorePrefixContext = createContext(resettable.clone());

export function ScorePrefixContextProvider(props: PropsWithChildren) {
    return (
        <ScorePrefixContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ScorePrefixContext.Provider>
    );
}
