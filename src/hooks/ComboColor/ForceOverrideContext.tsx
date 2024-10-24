import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable(false);

resettable.setJsonSaveHandler(function (json) {
    if (this.value) {
        json.ComboColor ??= {};
        json.ComboColor.forceOverride = this.value;
    }
});

export const ForceOverrideContext = createContext(resettable.clone());

export function ForceOverrideContextProvider(props: PropsWithChildren) {
    return (
        <ForceOverrideContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ForceOverrideContext.Provider>
    );
}
