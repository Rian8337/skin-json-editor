import { PropsWithChildren, createContext, useState } from "react";
import { createNumberResettable } from "../../utils/ResettableFactory";

const defaultValue = 4;
const minValue = 0;
const maxValue = 15;
const step = 0.1;

export const SliderIllustrationCircleSizeContext = createContext(
    createNumberResettable(defaultValue, minValue, maxValue, step)
);

export function SliderIllustrationCircleSizeContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderIllustrationCircleSizeContext.Provider
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
            }}
        >
            {props.children}
        </SliderIllustrationCircleSizeContext.Provider>
    );
}
