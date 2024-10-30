import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("default");

resettable.jsonPropertyGetter = (json) => json.Fonts?.hitCirclePrefix;

resettable.iniPropertyGetter = (ini) =>
    ini.get("Fonts", "HitCirclePrefix") ?? resettable.defaultValue;

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
