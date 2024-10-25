import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 61, minValue: 0 });

resettable.setJsonLoadHandler(function (json) {
    this.setValue(json.Slider?.sliderBodyWidth);
});

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderBodyWidth = this.value;
    }
});

export const SliderBodyWidthContext = createContext(resettable.clone());

export function SliderBodyWidthContextProvider(props: PropsWithChildren) {
    return (
        <SliderBodyWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBodyWidthContext.Provider>
    );
}
