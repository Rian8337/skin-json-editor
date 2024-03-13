import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createColorError, validateColor } from "../../utils/validators";
import { SliderFollowComboColorContext } from "./SliderFollowComboColorContext";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = "#FFFFFF";

export const SliderBodyColorContext = createContext(
    createJSONResettable(defaultValue)
);

export function SliderBodyColorContextProvider(props: PropsWithChildren) {
    const sliderFollowComboColor = useContext(SliderFollowComboColorContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderBodyColorContext.Provider
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
                    if (sliderFollowComboColor.value) {
                        return;
                    }

                    if (!validateColor(value)) {
                        throw createColorError(
                            `The slider body color (${value}) is invalid`
                        );
                    }

                    if (!this.isDefault) {
                        json.Slider ??= {};
                        json.Slider.sliderBodyColor = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderBodyColorContext.Provider>
    );
}
