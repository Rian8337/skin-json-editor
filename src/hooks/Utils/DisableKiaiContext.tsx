import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(false);

resettable.jsonPropertyGetter = (json) => json.Utils?.disableKiai;

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.disableKiai = this.value;
};

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
