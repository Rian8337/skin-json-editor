import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.ModsButton ??= {};
        json.Layout.ModsButton.y = this.value;
    }
});

export const DifficultySwitcherYContext = createContext(resettable.clone());

export function DifficultySwitcherYContextProvider(props: PropsWithChildren) {
    return (
        <DifficultySwitcherYContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </DifficultySwitcherYContext.Provider>
    );
}
