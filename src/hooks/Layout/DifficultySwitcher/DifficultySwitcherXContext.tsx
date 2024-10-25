import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Layout?.DifficultySwitcher?.x);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.DifficultySwitcher ??= {};
        json.Layout.DifficultySwitcher.x = this.value;
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
