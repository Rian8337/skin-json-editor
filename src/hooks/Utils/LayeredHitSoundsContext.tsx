import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Utils?.layeredHitSounds;

resettable.iniPropertyGetter = (ini) => {
    const layeredHitSounds = ini.get("Utils", "LayeredHitSounds");

    if (!layeredHitSounds) {
        return resettable.defaultValue;
    }

    return layeredHitSounds === "1";
};

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.layeredHitSounds = this.value;
};

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
