import { Resettable } from "@structures/resettable/Resettable";
import { createContext, PropsWithChildren, useState } from "react";

const resettable = new Resettable(true);

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderBallFlip = this.value;
    }
});

export const SliderBallFlipContext = createContext(resettable.clone());

export default function SliderBallFlipContextProvider(
    props: PropsWithChildren
) {
    return (
        <SliderBallFlipContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBallFlipContext.Provider>
    );
}
