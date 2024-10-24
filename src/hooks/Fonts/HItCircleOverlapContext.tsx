import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: -2 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Fonts ??= {};
        json.Fonts.hitCircleOverlap = this.value;
    }
});

export const HitCircleOverlapContext = createContext(resettable.clone());

export function HitCircleOverlapContextProvider(props: PropsWithChildren) {
    return (
        <HitCircleOverlapContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </HitCircleOverlapContext.Provider>
    );
}
