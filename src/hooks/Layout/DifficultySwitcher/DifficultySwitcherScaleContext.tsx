import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Layout?.DifficultySwitcher?.scale);
});

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.DifficultySwitcher ??= {};
        json.Layout.DifficultySwitcher.scale = this.value;
    }
});

export const DifficultySwitcherScaleContext = createContext(resettable.clone());

export function DifficultySwitcherScaleContextProvider(
    props: PropsWithChildren
) {
    return (
        <DifficultySwitcherScaleContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </DifficultySwitcherScaleContext.Provider>
    );
}
