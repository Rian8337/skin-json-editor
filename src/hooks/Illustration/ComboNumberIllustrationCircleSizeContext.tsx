import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({
    defaultValue: 4,
    minValue: 0,
    maxValue: 15,
    step: 0.1,
});

export const ComboNumberIllustrationCircleSizeContext = createContext(
    resettable.clone()
);

export function ComboNumberIllustrationCircleSizeContextProvider(
    props: PropsWithChildren
) {
    return (
        <ComboNumberIllustrationCircleSizeContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </ComboNumberIllustrationCircleSizeContext.Provider>
    );
}
