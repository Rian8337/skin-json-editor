import { SkinIniSection } from "@constants/SkinIniSection";
import { NumberResettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new NumberResettable({ defaultValue: -1, minValue: -1 });

resettable.jsonPropertyGetter = (json) => json.Utils?.animationFramerate;

resettable.iniPropertyGetter = (ini) => {
    const animationFramerate = ini.get(
        SkinIniSection.general,
        "AnimationFramerate",
    );

    if (!animationFramerate) {
        return resettable.defaultValue;
    }

    return parseFloat(animationFramerate);
};

resettable.jsonSaveHandler = function (json) {
    json.Utils ??= {};
    json.Utils.animationFramerate = this.value;
};

export const AnimationFramerateContext = createContext(resettable.clone());

export function AnimationFramerateContextProvider(props: PropsWithChildren) {
    return (
        <AnimationFramerateContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </AnimationFramerateContext.Provider>
    );
}
