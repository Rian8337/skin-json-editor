import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { NumberResettable } from "@structures/resettable";

const resettable = new NumberResettable({ defaultValue: 3, minValue: 0 });

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderHintWidth;

// Game forces the slider hint width to be 25 for skin.ini.
resettable.iniPropertyGetter = () => 25;

export const SliderHintWidthContext = createContext(resettable.clone());

export function SliderHintWidthContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);

    resettable.jsonSaveHandler = function (json) {
        if (!sliderHintEnable.value) {
            return;
        }

        json.Slider ??= {};
        json.Slider.sliderHintWidth = this.value;
    };

    return (
        <SliderHintWidthContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintWidthContext.Provider>
    );
}
