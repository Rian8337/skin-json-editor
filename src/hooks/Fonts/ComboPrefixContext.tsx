import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("score");

resettable.jsonPropertyGetter = (json) => json.Fonts?.comboPrefix;

resettable.iniPropertyGetter = (ini) =>
    ini.get("Fonts", "ComboPrefix") ?? resettable.defaultValue;

resettable.jsonSaveHandler = function (json) {
    json.Fonts ??= {};
    json.Fonts.comboPrefix = this.value;
};

export const ComboPrefixContext = createContext(resettable.clone());

export function ComboPrefixContextProvider(props: PropsWithChildren) {
    return (
        <ComboPrefixContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboPrefixContext.Provider>
    );
}
