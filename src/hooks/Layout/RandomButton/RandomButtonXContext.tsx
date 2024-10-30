import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Layout?.RandomButton?.x;

resettable.jsonSaveHandler = function (json) {
    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.RandomButton ??= {};
    json.Layout.RandomButton.x = this.value;
};

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
