import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = 0.7;
const minValue = 0;
const maxValue = 1;
const step = 0.01;

export const SliderBodyBaseAlphaContext = createContext(
    createNumberJSONResettable(defaultValue, minValue, maxValue, step)
);

export function SliderBodyBaseAlphaContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderBodyBaseAlphaContext.Provider
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
                    if (!this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderBodyBaseAlpha = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderBodyBaseAlphaContext.Provider>
    );
}
