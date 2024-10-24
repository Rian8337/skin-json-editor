import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 300, minValue: 0 });

export const SliderHintShowMinLengthContext = createContext(resettable.clone());

export function SliderHintShowMinLengthContextProvider(
    props: PropsWithChildren
) {
    const sliderHintEnable = useContext(SliderHintEnableContext);

    resettable.setJsonSaveHandler(function (json) {
        if (sliderHintEnable.value && !this.isDefault) {
            json.Slider ??= {};
            json.Slider.sliderHintShowMinLength = this.value;
        }
    });

    return (
        <SliderHintShowMinLengthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintShowMinLengthContext.Provider>
    );
}
