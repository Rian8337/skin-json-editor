import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.RandomButton?.h;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.RandomButton ??= {};
    json.Layout.RandomButton.h = this.value;
};

export const RandomButtonHeightContext = createContext(resettable.clone());

export function RandomButtonHeightContextProvider(props: PropsWithChildren) {
    return (
        <RandomButtonHeightContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RandomButtonHeightContext.Provider>
    );
}
