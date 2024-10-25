import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Utils?.spinnerFrequencyModulate);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Utils ??= {};
        json.Utils.spinnerFrequencyModulate = this.value;
    }
});

export const SpinnerFrequencyModulateContext = createContext(
    resettable.clone()
);

export function SpinnerFrequencyModulateContextProvider(
    props: PropsWithChildren
) {
    return (
        <SpinnerFrequencyModulateContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SpinnerFrequencyModulateContext.Provider>
    );
}
