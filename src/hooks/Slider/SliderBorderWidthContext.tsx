import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable/NumberResettable";

const resettable = new NumberResettable({ defaultValue: 5.2, minValue: 0 });

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderBorderWidth = this.value;
    }
});

export const SliderBorderWidthContext = createContext(resettable.clone());

export function SliderBorderWidthContextProvider(props: PropsWithChildren) {
    return (
        <SliderBorderWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBorderWidthContext.Provider>
    );
}
