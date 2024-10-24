import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({
    defaultValue: 0.3,
    minValue: 0,
    maxValue: 1,
    step: 0.01,
});

export const SliderHintAlphaContext = createContext(resettable.clone());

export function SliderHintAlphaContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);

    resettable.setJsonSaveHandler(function (json) {
        if (sliderHintEnable.value && !this.isDefault) {
            json.Slider ??= {};
            json.Slider.sliderHintAlpha = this.value;
        }
    });

    return (
        <SliderHintAlphaContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintAlphaContext.Provider>
    );
}
