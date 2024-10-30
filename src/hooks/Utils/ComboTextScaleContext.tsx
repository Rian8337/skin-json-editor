import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({
    defaultValue: 1,
    minValue: 0,
    step: 0.1,
});

resettable.jsonPropertyGetter = (json) => json.Utils?.comboTextScale;

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.comboTextScale = this.value;
};

export const ComboTextScaleContext = createContext(resettable.clone());

export function ComboTextScaleContextProvider(props: PropsWithChildren) {
    return (
        <ComboTextScaleContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboTextScaleContext.Provider>
    );
}
