import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.ModsButton ??= {};
        json.Layout.ModsButton.h = this.value;
    }
});

export const DifficultySwitcherHeightContext = createContext(
    resettable.clone()
);

export function DifficultySwitcherHeightContextProvider(
    props: PropsWithChildren
) {
    return (
        <DifficultySwitcherHeightContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </DifficultySwitcherHeightContext.Provider>
    );
}
