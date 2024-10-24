import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(true);

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Layout ??= {};
        json.Layout.useNewLayout = true;

        json.Layout.BackButton ??= {};
        json.Layout.BackButton.scaleWhenHold = this.value;
    }
});

export const BackButtonScaleWhenHoldContext = createContext(resettable.clone());

export function BackButtonScaleWhenHoldContextProvider(
    props: PropsWithChildren
) {
    return (
        <BackButtonScaleWhenHoldContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonScaleWhenHoldContext.Provider>
    );
}
