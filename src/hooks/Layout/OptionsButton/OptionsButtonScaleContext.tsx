import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Layout?.OptionsButton?.scale;

resettable.jsonSaveHandler = function (json) {
    if (this.value < 0) {
        return;
    }

    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.OptionsButton ??= {};
    json.Layout.OptionsButton.scale = this.value;
};

export const OptionsButtonScaleContext = createContext(resettable.clone());

export function OptionsButtonScaleContextProvider(props: PropsWithChildren) {
    return (
        <OptionsButtonScaleContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </OptionsButtonScaleContext.Provider>
    );
}
