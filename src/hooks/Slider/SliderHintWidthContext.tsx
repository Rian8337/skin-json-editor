import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 3, minValue: 0 });

export const SliderHintWidthContext = createContext(resettable.clone());

export function SliderHintWidthContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);

    resettable.setJsonSaveHandler(function (json) {
        if (sliderHintEnable.value && !this.isDefault) {
            json.Slider ??= {};
            json.Slider.sliderHintWidth = this.value;
        }
    });

    return (
        <SliderHintWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintWidthContext.Provider>
    );
}
