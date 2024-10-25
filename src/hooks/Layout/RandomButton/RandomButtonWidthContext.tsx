import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Layout?.RandomButton?.w);
});

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.RandomButton ??= {};
        json.Layout.RandomButton.w = this.value;
    }
});

export const RandomButtonWidthContext = createContext(resettable.clone());

export function RandomButtonWidthContextProvider(props: PropsWithChildren) {
    return (
        <RandomButtonWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RandomButtonWidthContext.Provider>
    );
}
