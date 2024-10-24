import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.RandomButton ??= {};
        json.Layout.RandomButton.y = this.value;
    }
});

export const RandomButtonYContext = createContext(resettable.clone());

export function RandomButtonYContextProvider(props: PropsWithChildren) {
    return (
        <RandomButtonYContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RandomButtonYContext.Provider>
    );
}
