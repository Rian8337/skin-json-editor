import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Layout?.RandomButton?.scale);
});

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.RandomButton ??= {};
        json.Layout.RandomButton.scale = this.value;
    }
});

export const RandomButtonScaleContext = createContext(resettable.clone());

export function RandomButtonScaleContextProvider(props: PropsWithChildren) {
    return (
        <RandomButtonScaleContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RandomButtonScaleContext.Provider>
    );
}
