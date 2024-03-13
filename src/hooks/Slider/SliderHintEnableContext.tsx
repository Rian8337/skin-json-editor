import { PropsWithChildren, createContext, useState } from "react";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = false;

export const SliderHintEnableContext = createContext(
    createJSONResettable(defaultValue)
);

export function SliderHintEnableContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderHintEnableContext.Provider
            value={{
                defaultValue,
                value,
                get isDefault() {
                    return value === defaultValue;
                },
                reset: () => {
                    setValue(defaultValue);
                },
                setValue: (value = defaultValue) => {
                    setValue(value);
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderHintEnable = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderHintEnableContext.Provider>
    );
}
