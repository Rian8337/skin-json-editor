import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.ModsButton?.w;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.ModsButton ??= {};
    json.Layout.ModsButton.w = this.value;
};

export const ModsButtonWidthContext = createContext(resettable);

export function ModsButtonWidthContextProvider(props: PropsWithChildren) {
    return (
        <ModsButtonWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ModsButtonWidthContext.Provider>
    );
}
