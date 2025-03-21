import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resettable = new Resettable<any>(undefined);

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
resettable.jsonPropertyGetter = (json) => json.HUD;

resettable.jsonSaveHandler = (json) => {
    if (resettable.isDefault) {
        return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    json.HUD = resettable.value;
};

export const HUDDataContext = createContext(resettable.clone());

export function HUDDataContextProvider(props: PropsWithChildren) {
    return (
        <HUDDataContext.Provider value={resettable.clone()}>
            {props.children}
        </HUDDataContext.Provider>
    );
}
