import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.OptionsButton ??= {};
        json.Layout.OptionsButton.w = this.value;
    }
});

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
