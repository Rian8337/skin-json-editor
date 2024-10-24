import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.BackButton ??= {};
        json.Layout.BackButton.h = this.value;
    }
});

export const BackButtonHeightContext = createContext(resettable.clone());

export function BackButtonHeightContextProvider(props: PropsWithChildren) {
    return (
        <BackButtonHeightContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonHeightContext.Provider>
    );
}
