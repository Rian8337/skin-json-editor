import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable("score");

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Fonts ??= {};
        json.Fonts.comboPrefix = this.value;
    }
});

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
