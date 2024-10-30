import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 0, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Layout?.OptionsButton?.x;

resettable.jsonSaveHandler = function (json) {
    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.OptionsButton ??= {};
    json.Layout.OptionsButton.x = this.value;
};

export const OptionsButtonXContext = createContext(resettable.clone());

export function OptionsButtonXContextProvider(props: PropsWithChildren) {
    return (
        <OptionsButtonXContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </OptionsButtonXContext.Provider>
    );
}
