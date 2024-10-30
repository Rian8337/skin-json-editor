import { PropsWithChildren, createContext, useState } from "react";
import { createColorError, validateColor } from "@utils/validators";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("#FFFFFF");

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBorderColor;

resettable.jsonPropertyValidator = (value) => {
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
