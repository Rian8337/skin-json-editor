import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Fonts?.comboOverlap;

resettable.iniPropertyGetter = (ini) => {
    const comboOverlap = ini.get("Fonts", "ComboOverlap");

    if (!comboOverlap) {
        return resettable.defaultValue;
    }

    return parseFloat(comboOverlap);
};

resettable.jsonSaveHandler = function (json) {
    json.Fonts ??= {};
    json.Fonts.comboOverlap = this.value;
};

export const ComboOverlapContext = createContext(resettable.clone());

export function ComboOverlapContextProvider(props: PropsWithChildren) {
    return (
        <ComboOverlapContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboOverlapContext.Provider>
    );
}
