import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBallFlip;

resettable.jsonSaveHandler = function (json) {
    json.Slider ??= {};
    json.Slider.sliderBallFlip = this.value;
};

export const SliderBallFlipContext = createContext(resettable.clone());

export function SliderBallFlipContextProvider(props: PropsWithChildren) {
    return (
        <SliderBallFlipContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBallFlipContext.Provider>
    );
}
