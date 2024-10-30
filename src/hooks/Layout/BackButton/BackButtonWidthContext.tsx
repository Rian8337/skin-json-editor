import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.BackButton?.w;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.BackButton ??= {};
    json.Layout.BackButton.w = this.value;
};

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
