import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.DifficultySwitcher?.w;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.DifficultySwitcher ??= {};
    json.Layout.DifficultySwitcher.w = this.value;
};

export const DifficultySwitcherWidthContext = createContext(resettable);

export function DifficultySwitcherWidthContextProvider(
    props: PropsWithChildren
) {
    return (
        <DifficultySwitcherWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </DifficultySwitcherWidthContext.Provider>
    );
}
