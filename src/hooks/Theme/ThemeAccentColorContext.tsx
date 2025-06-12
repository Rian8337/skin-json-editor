import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable("#C2CAFF");

resettable.jsonPropertyGetter = (json) => json.Theme?.accentColor;

resettable.jsonSaveHandler = function (json) {
    if (!this.isDefault) {
        json.Theme ??= {};
        json.Theme.accentColor = this.value;
    }
};

export const ThemeAccentColorContext = createContext(resettable.clone());

export function ThemeAccentColorContextProvider(props: PropsWithChildren) {
    return (
        <ThemeAccentColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ThemeAccentColorContext.Provider>
    );
}
