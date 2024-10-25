import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: 0 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Fonts?.scoreOverlap);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Fonts ??= {};
        json.Fonts.scoreOverlap = this.value;
    }
});

export const ScoreOverlapContext = createContext(resettable.clone());

export function ScoreOverlapContextProvider(props: PropsWithChildren) {
    return (
        <ScoreOverlapContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ScoreOverlapContext.Provider>
    );
}
