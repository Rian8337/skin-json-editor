import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(false);

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderHintEnable = this.value;
    }
});

export const SliderHintEnableContext = createContext(resettable.clone());

export function SliderHintEnableContextProvider(props: PropsWithChildren) {
    return (
        <SliderHintEnableContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintEnableContext.Provider>
    );
}
