import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Fonts?.scoreOverlap;

resettable.jsonSaveHandler = function (json) {
    json.Fonts ??= {};
    json.Fonts.scoreOverlap = this.value;
};

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
