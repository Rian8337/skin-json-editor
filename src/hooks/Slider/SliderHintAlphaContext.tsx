import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { createNumberResettable } from "../../utils/ResettableFactory";

const defaultValue = 0.3;
const minValue = 0;
const maxValue = 1;
const step = 0.01;

export const SliderHintAlphaContext = createContext(
    createNumberResettable(defaultValue, minValue, maxValue, step)
);

export function SliderHintAlphaContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderHintAlphaContext.Provider
            value={{
                defaultValue,
                value,
                minValue,
                maxValue,
                step,
                get isDefault() {
                    return value === defaultValue;
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(Math.max(minValue, Math.min(value, maxValue)));
                },
                saveToJSON(json) {
                    if (sliderHintEnable.value && !this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderHintAlpha = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderHintAlphaContext.Provider>
    );
}
