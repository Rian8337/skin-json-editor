import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Layout?.ModsButton?.y;

// Game forces the mods button Y to be offset 16 pixels downwards in skin.ini.
resettable.iniPropertyGetter = () => -16;

resettable.jsonSaveHandler = function (json) {
    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.ModsButton ??= {};
    json.Layout.ModsButton.y = this.value;
};

export const ModsButtonYContext = createContext(resettable.clone());

export function ModsButtonYContextProvider(props: PropsWithChildren) {
    return (
        <ModsButtonYContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ModsButtonYContext.Provider>
    );
}
