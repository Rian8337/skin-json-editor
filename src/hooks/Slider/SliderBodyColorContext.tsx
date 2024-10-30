import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createColorError, validateColor } from "@utils/validators";
import { SliderFollowComboColorContext } from "./SliderFollowComboColorContext";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("#FFFFFF");

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderBodyColor;

resettable.jsonPropertyValidator = (value) => {
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
