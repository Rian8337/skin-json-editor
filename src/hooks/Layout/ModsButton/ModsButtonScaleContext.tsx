import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.ModsButton?.scale;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.ModsButton ??= {};
    json.Layout.ModsButton.scale = this.value;
};

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
