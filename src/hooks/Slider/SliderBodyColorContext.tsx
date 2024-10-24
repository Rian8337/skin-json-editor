import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createColorError, validateColor } from "@utils/validators";
import { SliderFollowComboColorContext } from "./SliderFollowComboColorContext";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable("#FFFFFF");

export const SliderBodyColorContext = createContext(resettable.clone());

export function SliderBodyColorContextProvider(props: PropsWithChildren) {
    const sliderFollowComboColor = useContext(SliderFollowComboColorContext);

    resettable.setJsonSaveHandler(function (json) {
        if (sliderFollowComboColor.value) {
            return;
        }

        if (!validateColor(this.value)) {
            throw createColorError(
                `The slider body color (${this.value}) is invalid`
            );
        }

        if (!this.isDefault) {
            json.Slider ??= {};
            json.Slider.sliderBodyColor = this.value;
        }
    });

    return (
        <SliderBodyColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderBodyColorContext.Provider>
    );
}
