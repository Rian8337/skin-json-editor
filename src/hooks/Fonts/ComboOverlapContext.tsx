import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: 0 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Fonts?.comboOverlap);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Fonts ??= {};
        json.Fonts.comboOverlap = this.value;
    }
});

export const ComboOverlapContext = createContext(resettable.clone());

export function ComboOverlapContextProvider(props: PropsWithChildren) {
    return (
        <ComboOverlapContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboOverlapContext.Provider>
    );
}
