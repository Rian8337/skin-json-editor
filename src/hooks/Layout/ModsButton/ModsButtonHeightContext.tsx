import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.ModsButton?.h;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.ModsButton ??= {};
    json.Layout.ModsButton.h = this.value;
};

export const ModsButtonHeightContext = createContext(resettable.clone());

export function ModsButtonHeightContextProvider(props: PropsWithChildren) {
    return (
        <ModsButtonHeightContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ModsButtonHeightContext.Provider>
    );
}
