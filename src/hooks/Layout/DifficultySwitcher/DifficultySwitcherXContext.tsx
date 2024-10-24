import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.ModsButton ??= {};
        json.Layout.ModsButton.x = this.value;
    }
});

export const DifficultySwitcherXContext = createContext(resettable.clone());

export function DifficultySwitcherXContextProvider(props: PropsWithChildren) {
    return (
        <DifficultySwitcherXContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </DifficultySwitcherXContext.Provider>
    );
}
