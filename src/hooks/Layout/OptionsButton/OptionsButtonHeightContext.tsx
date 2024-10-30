import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.OptionsButton?.h;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.OptionsButton ??= {};
    json.Layout.OptionsButton.h = this.value;
};

export const OptionsButtonHeightContext = createContext(resettable.clone());

export function OptionsButtonHeightContextProvider(props: PropsWithChildren) {
    return (
        <OptionsButtonHeightContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </OptionsButtonHeightContext.Provider>
    );
}
