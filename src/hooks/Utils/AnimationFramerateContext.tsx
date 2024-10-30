import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: 60, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Utils?.animationFramerate;

resettable.iniPropertyGetter = (ini) => {
    const animationFramerate = ini.get("Utils", "AnimationFramerate");

    if (!animationFramerate) {
        return resettable.defaultValue;
    }

    return parseFloat(animationFramerate);
};

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.animationFramerate = this.value;
};

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
