import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({
    defaultValue: 0.7,
    minValue: 0,
    maxValue: 1,
    step: 0.01,
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderBodyBaseAlpha = this.value;
    }
});

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
