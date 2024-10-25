import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Layout?.BackButton?.y);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.BackButton ??= {};
        json.Layout.BackButton.y = this.value;
    }
});

export const BackButtonYContext = createContext(resettable.clone());

export function BackButtonYContextProvider(props: PropsWithChildren) {
    return (
        <BackButtonYContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonYContext.Provider>
    );
}
