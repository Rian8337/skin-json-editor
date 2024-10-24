import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";
import { NumberResettableType } from "@structures/resettable";

const resettable = new NumberResettable({
    type: NumberResettableType.integer,
    defaultValue: 1,
    minValue: 1,
    maxValue: 99,
});

export const ComboNumberIllustrationNumbersContext = createContext(
    resettable.clone()
);

export function ComboNumberIllustrationNumbersContextProvider(
    props: PropsWithChildren
) {
    return (
        <ComboNumberIllustrationNumbersContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboNumberIllustrationNumbersContext.Provider>
    );
}
