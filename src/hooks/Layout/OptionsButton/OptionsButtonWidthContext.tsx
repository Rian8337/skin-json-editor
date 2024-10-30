import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.OptionsButton?.w;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.OptionsButton ??= {};
    json.Layout.OptionsButton.w = this.value;
};

export const OptionsButtonWidthContext = createContext(resettable.clone());

export function OptionsButtonWidthContextProvider(props: PropsWithChildren) {
    return (
        <OptionsButtonWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </OptionsButtonWidthContext.Provider>
    );
}
