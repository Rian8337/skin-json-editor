import { PropsWithChildren, createContext, useState } from "react";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = false;

export const SliderFollowComboColorContext = createContext(
    createResettable(defaultValue)
);

export function SliderFollowComboColorContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderFollowComboColorContext.Provider
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
                        json.Slider.sliderFollowComboColor = value;
                    }
                },
            }}
        >
            {props.children}
        </SliderFollowComboColorContext.Provider>
    );
}
