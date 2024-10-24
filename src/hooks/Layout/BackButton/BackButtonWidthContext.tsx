import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.BackButton ??= {};
        json.Layout.BackButton.w = this.value;
    }
});

export const BackButtonWidthContext = createContext(resettable.clone());

export function BackButtonWidthContextProvider(props: PropsWithChildren) {
    return (
        <BackButtonWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonWidthContext.Provider>
    );
}
