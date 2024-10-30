import { PropsWithChildren, createContext, useState } from "react";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 5.2, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBorderWidth;

resettable.jsonSaveHandler = function (json) {
    json.Slider ??= {};
    json.Slider.sliderBorderWidth = this.value;
};

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
