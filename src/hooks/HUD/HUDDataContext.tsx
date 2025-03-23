import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resettable = new Resettable<any>(undefined);

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
resettable.jsonPropertyGetter = (json) => json.HUD;

resettable.jsonSaveHandler = function (json) {
    if (this.isDefault) {
        return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    json.HUD = this.value;
};

export const HUDDataContext = createContext(resettable.clone());

export function HUDDataContextProvider(props: PropsWithChildren) {
    return (
        <HUDDataContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </HUDDataContext.Provider>
    );
}
