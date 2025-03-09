import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({
    defaultValue: 4,
    minValue: 0,
    maxValue: 15,
    step: 0.1,
});

export const SliderIllustrationCircleSizeContext = createContext(
    resettable.clone(),
);

export function SliderIllustrationCircleSizeContextProvider(
    props: PropsWithChildren,
) {
    return (
        <SliderIllustrationCircleSizeContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderIllustrationCircleSizeContext.Provider>
    );
}
