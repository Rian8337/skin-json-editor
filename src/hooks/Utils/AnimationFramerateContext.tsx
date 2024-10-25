import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: 60, minValue: -1 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Utils?.animationFramerate);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Utils ??= {};
        json.Utils.animationFramerate = this.value;
    }
});

export const AnimationFrameContext = createContext(resettable.clone());

export function AnimationFrameContextProvider(props: PropsWithChildren) {
    return (
        <AnimationFrameContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </AnimationFrameContext.Provider>
    );
}
