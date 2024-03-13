import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = 61;
const minValue = 0;

export const SliderBodyWidthContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function SliderBodyWidthContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderBodyWidthContext.Provider
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
                    if (!this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderBodyWidth = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderBodyWidthContext.Provider>
    );
}
