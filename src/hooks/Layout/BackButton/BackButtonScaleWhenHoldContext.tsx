import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) =>
    json.Layout?.BackButton?.scaleWhenHold;

// Game forces the scale when hold to be disabled in skin.ini.
resettable.iniPropertyGetter = () => false;

resettable.jsonSaveHandler = function (json) {
    json.Layout ??= {};
    json.Layout.useNewLayout = true;

    json.Layout.BackButton ??= {};
    json.Layout.BackButton.scaleWhenHold = this.value;
};

export const BackButtonScaleWhenHoldContext = createContext(resettable.clone());

export function BackButtonScaleWhenHoldContextProvider(
    props: PropsWithChildren,
) {
    return (
        <BackButtonScaleWhenHoldContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </BackButtonScaleWhenHoldContext.Provider>
    );
}
