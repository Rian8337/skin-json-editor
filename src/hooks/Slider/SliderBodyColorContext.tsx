import { SkinIniSection } from "@constants/SkinIniSection";
import { Resettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";
import { createColorError, validateColor } from "@utils/validators";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderFollowComboColorContext } from "./SliderFollowComboColorContext";

const resettable = new Resettable("#FFFFFF");

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBodyColor;

resettable.iniPropertyGetter = (ini) => {
    const color = ini.get(SkinIniSection.colors, "SliderTrackOverride");

    if (!color) {
        return;
    }

    return rgbToHex(color);
};

resettable.propertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(`The slider body color (${value}) is invalid`);
    }
};

export const SliderBodyColorContext = createContext(resettable.clone());

export function SliderBodyColorContextProvider(props: PropsWithChildren) {
    const sliderFollowComboColor = useContext(SliderFollowComboColorContext);

    resettable.jsonSaveHandler = function (json) {
        if (sliderFollowComboColor.value) {
            return;
        }

        json.Slider ??= {};
        json.Slider.sliderBodyColor = this.value;
    };

    return (
        <SliderBodyColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBodyColorContext.Provider>
    );
}
