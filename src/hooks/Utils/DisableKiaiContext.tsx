import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(false);

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Utils?.disableKiai);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Utils ??= {};
        json.Utils.disableKiai = this.value;
    }
});

export const DisableKiaiContext = createContext(resettable.clone());

export function DisableKiaiContextProvider(props: PropsWithChildren) {
    return (
        <DisableKiaiContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </DisableKiaiContext.Provider>
    );
}
