import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("#FFFFFF");

export const SliderIllustrationComboColorContext = createContext(
    resettable.clone()
);

export function SliderIllustrationComboColorContextProvider(
    props: PropsWithChildren
) {
    return (
        <SliderIllustrationComboColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderIllustrationComboColorContext.Provider>
    );
}
