import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.setJsonSaveHandler(function (json) {
    if (this.value >= 0) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.BackButton ??= {};
        json.Layout.BackButton.scale = this.value;
    }
});

export const BackButtonScaleContext = createContext(resettable.clone());

export function BackButtonScaleContextProvider(props: PropsWithChildren) {
    return (
        <BackButtonScaleContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonScaleContext.Provider>
    );
}
