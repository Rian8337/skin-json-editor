import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SliderHintEnableContext } from "./SliderHintEnableContext";
import { createColorError, validateColor } from "../../utils/validators";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = undefined as string | undefined;

export const SliderHintColorContext = createContext(
    createJSONResettable(defaultValue)
);

export function SliderHintColorContextProvider(props: PropsWithChildren) {
    const sliderHintEnable = useContext(SliderHintEnableContext);
    const [value, setValue] = useState<string | undefined>(defaultValue);

    return (
        <SliderHintColorContext.Provider
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
                    if (!sliderHintEnable.value) {
                        return;
                    }

                    if (!validateColor(value)) {
                        throw createColorError(
                            `The slider hint color (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderHintColor = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderHintColorContext.Provider>
    );
}
