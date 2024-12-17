import { PropsWithChildren, createContext, useState } from "react";
import { createColorError, validateColor } from "@utils/validators";
import { Resettable } from "@structures/resettable";
import { rgbToHex } from "@utils/converters";
import { SkinIniSection } from "constants/SkinIniSection";

const resettable = new Resettable("#FFFFFF");

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBorderColor;

resettable.iniPropertyGetter = (ini) => {
    const color = ini.get(SkinIniSection.colors, "SliderBorder");

    if (!color) {
        return resettable.defaultValue;
    }

    return rgbToHex(color);
};

resettable.propertyValidator = (value) => {
    if (!validateColor(value)) {
        throw createColorError(`The slider border color (${value}) is invalid`);
    }
};

resettable.jsonSaveHandler = function (json) {
    json.Slider ??= {};
    json.Slider.sliderBorderColor = this.value;
};

export const SliderBorderColorContext = createContext(resettable.clone());

export function SliderBorderColorContextProvider(props: PropsWithChildren) {
    return (
        <SliderBorderColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBorderColorContext.Provider>
    );
}
