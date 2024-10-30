import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Layout?.BackButton?.x;

resettable.jsonSaveHandler = function (json) {
    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.BackButton ??= {};
    json.Layout.BackButton.x = this.value;
};

export const BackButtonXContext = createContext(resettable.clone());

export function BackButtonXContextProvider(props: PropsWithChildren) {
    return (
        <BackButtonXContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonXContext.Provider>
    );
}
