import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.ModsButton ??= {};
        json.Layout.ModsButton.scale = this.value;
    }
});

export const ModsButtonScaleContext = createContext(resettable.clone());

export function ModsButtonScaleContextProvider(props: PropsWithChildren) {
    return (
        <ModsButtonScaleContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ModsButtonScaleContext.Provider>
    );
}
