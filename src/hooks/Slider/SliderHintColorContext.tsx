import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { createColorError, validateColor } from "@utils/validators";
import { Resettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";
import { SkinIniSection } from "constants/SkinIniSection";

const resettable = new Resettable<string | undefined>(undefined);

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderHintColor;

resettable.iniPropertyGetter = (ini) => {
    const color = ini.get(SkinIniSection.colors, "SliderTrackOverride");

    if (!color) {
        return;
    }

    return rgbToHex(color, 15);
};

resettable.propertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(`The slider hint color (${value}) is invalid`);
    }
};

export const SliderHintColorContext = createContext(resettable.clone());

export function SliderHintColorContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);

    resettable.jsonSaveHandler = function (json) {
        if (!sliderHintEnable.value) {
            return;
        }

        json.Slider ??= {};
        json.Slider.sliderHintColor = this.value;
    };

    return (
        <SliderHintColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderHintColorContext.Provider>
    );
}
