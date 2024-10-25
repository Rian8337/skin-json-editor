import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Utils?.layeredHitSounds);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Utils ??= {};
        json.Utils.layeredHitSounds = this.value;
    }
});

export const LayeredHitSoundsContext = createContext(resettable.clone());

export function LayeredHitSoundsContextProvider(props: PropsWithChildren) {
    return (
        <LayeredHitSoundsContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </LayeredHitSoundsContext.Provider>
    );
}
