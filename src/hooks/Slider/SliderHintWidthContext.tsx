import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { createNumberJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = 3;
const minValue = 0;

export const SliderHintWidthContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function SliderHintWidthContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderHintWidthContext.Provider
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
                        json.Slider.sliderHintWidth = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderHintWidthContext.Provider>
    );
}
