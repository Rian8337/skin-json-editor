import { PropsWithChildren, createContext, useState } from "react";
import { createColorError, validateColor } from "../../utils/validators";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = "#FFFFFF";

export const SliderBorderColorContext = createContext(
    createResettable(defaultValue)
);

export function SliderBorderColorContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderBorderColorContext.Provider
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
                    if (!validateColor(value)) {
                        throw createColorError(
                            `The slider border color (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderBorderColor = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderBorderColorContext.Provider>
    );
}
