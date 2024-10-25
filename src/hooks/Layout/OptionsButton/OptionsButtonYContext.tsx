import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Layout?.OptionsButton?.y);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.OptionsButton ??= {};
        json.Layout.OptionsButton.y = this.value;
    }
});

export const OptionsButtonYContext = createContext(resettable.clone());

export function OptionsButtonYContextProvider(props: PropsWithChildren) {
    return (
        <OptionsButtonYContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </OptionsButtonYContext.Provider>
    );
}
