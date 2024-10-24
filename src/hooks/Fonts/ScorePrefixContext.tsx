import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("score");

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Fonts ??= {};
        json.Fonts.scorePrefix = this.value;
    }
});

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
