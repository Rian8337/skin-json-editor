import { PropsWithChildren, createContext, useState } from "react";
import { createNumberResettable } from "../../utils/ResettableFactory";

const defaultValue = 5.2;
const minValue = 0;

export const SliderBorderWidthContext = createContext(
    createNumberResettable(defaultValue, minValue)
);

export function SliderBorderWidthContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderBorderWidthContext.Provider
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
                        json.Slider.sliderBorderWidth = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderBorderWidthContext.Provider>
    );
}
