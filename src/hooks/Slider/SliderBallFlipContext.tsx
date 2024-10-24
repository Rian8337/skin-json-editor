import { Resettable } from "@structures/resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderBallFlip = this.value;
    }
});

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
