import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.RandomButton ??= {};
        json.Layout.RandomButton.x = this.value;
    }
});

export const RandomButtonXContext = createContext(resettable.clone());

export function RandomButtonXContextProvider(props: PropsWithChildren) {
    return (
        <RandomButtonXContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RandomButtonXContext.Provider>
    );
}
