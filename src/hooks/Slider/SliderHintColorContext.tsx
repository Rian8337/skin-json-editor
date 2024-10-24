import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { createColorError, validateColor } from "@utils/validators";
import { Resettable } from "@structures/resettable/Resettable";

const resettable = new Resettable<string | undefined>(undefined);

export const SliderHintColorContext = createContext(resettable.clone());

export function SliderHintColorContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);

    resettable.setJsonSaveHandler(function (json) {
        if (!sliderHintEnable.value) {
            return;
        }

        if (!validateColor(this.value)) {
            throw createColorError(
                `The slider hint color (${this.value}) is invalid`
            );
        }

        if (!this.isDefault) {
            json.Slider ??= {};
            json.Slider.sliderHintColor = this.value;
        }
    });

    return (
        <SliderHintColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintColorContext.Provider>
    );
}
