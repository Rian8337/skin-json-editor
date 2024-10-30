import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(false);

resettable.jsonPropertyGetter = (json) => json.Utils?.limitComboTextLength;

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.limitComboTextLength = this.value;
};

export const LimitComboTextLengthContext = createContext(resettable.clone());

export function LimitComboTextLengthContextProvider(props: PropsWithChildren) {
    return (
        <LimitComboTextLengthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </LimitComboTextLengthContext.Provider>
    );
}
