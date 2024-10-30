import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.DifficultySwitcher?.h;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.DifficultySwitcher ??= {};
    json.Layout.DifficultySwitcher.h = this.value;
};

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
