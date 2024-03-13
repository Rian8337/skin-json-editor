import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { createNumberJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = 300;
const minValue = 0;

export const SliderHintShowMinLengthContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function SliderHintShowMinLengthContextProvider(
    props: PropsWithChildren
) {
    const sliderHintEnable = useContext(SliderHintEnableContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderHintShowMinLengthContext.Provider
            value={{
                defaultValue,
                value,
                minValue,
                get isDefault() {
                    return value === defaultValue;
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(Math.max(value, minValue));
                },
                saveToJSON(json) {
                    if (sliderHintEnable.value && !this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderHintShowMinLength = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderHintShowMinLengthContext.Provider>
    );
}
