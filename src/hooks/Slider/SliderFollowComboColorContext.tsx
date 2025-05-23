import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(false);

resettable.jsonPropertyGetter = (json) => json.Slider?.sliderFollowComboColor;

// Game forces the slider follow combo color to be disabled for skin.ini.
resettable.iniPropertyGetter = () => false;

resettable.jsonSaveHandler = function (json) {
    json.Slider ??= {};
    json.Slider.sliderFollowComboColor = this.value;
};

export const SliderFollowComboColorContext = createContext(resettable.clone());

export function SliderFollowComboColorContextProvider(
    props: PropsWithChildren,
) {
    return (
        <SliderFollowComboColorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </SliderFollowComboColorContext.Provider>
    );
}
