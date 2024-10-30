import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Utils?.spinnerFrequencyModulate;

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.spinnerFrequencyModulate = this.value;
};

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
