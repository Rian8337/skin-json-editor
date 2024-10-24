import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(false);

resettable.setJsonSaveHandler(function (json) {
    if (!this.isDefault) {
        json.Slider ??= {};
        json.Slider.sliderFollowComboColor = this.value;
    }
});

export const SliderFollowComboColorContext = createContext(resettable.clone());

export function SliderFollowComboColorContextProvider(
    props: PropsWithChildren
) {
    return (
        <SliderFollowComboColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderFollowComboColorContext.Provider>
    );
}
