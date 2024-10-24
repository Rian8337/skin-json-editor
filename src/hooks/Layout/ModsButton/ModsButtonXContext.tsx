import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.ModsButton ??= {};
        json.Layout.ModsButton.x = this.value;
    }
});

export const ModsButtonXContext = createContext(resettable.clone());

export function ModsButtonXContextProvider(props: PropsWithChildren) {
    return (
        <ModsButtonXContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ModsButtonXContext.Provider>
    );
}
