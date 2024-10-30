import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({
    defaultValue: 0.7,
    minValue: 0,
    maxValue: 1,
    step: 0.01,
});

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBodyBaseAlpha;

// Game forces the slider body alpha to be opaque for skin.ini.
resettable.iniPropertyGetter = () => 1;

resettable.jsonSaveHandler = function (json) {
    json.Slider ??= {};
    json.Slider.sliderBodyBaseAlpha = this.value;
};

export const SliderBodyBaseAlphaContext = createContext(resettable.clone());

export function SliderBodyBaseAlphaContextProvider(props: PropsWithChildren) {
    return (
        <SliderBodyBaseAlphaContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBodyBaseAlphaContext.Provider>
    );
}
