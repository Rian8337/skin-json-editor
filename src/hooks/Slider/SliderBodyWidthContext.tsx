import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: 61, minValue: 0 });

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
