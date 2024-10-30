import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Layout?.DifficultySwitcher?.y;

resettable.jsonSaveHandler = function (json) {
    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.DifficultySwitcher ??= {};
    json.Layout.DifficultySwitcher.y = this.value;
};

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
