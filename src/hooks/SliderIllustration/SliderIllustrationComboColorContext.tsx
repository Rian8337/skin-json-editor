import { PropsWithChildren, createContext, useState } from "react";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = "#FFFFFF";

export const SliderIllustrationComboColorContext = createContext(
    createResettable(defaultValue)
);

export function SliderIllustrationComboColorContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <SliderIllustrationComboColorContext.Provider
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
            }}
        >
            {props.children}
        </SliderIllustrationComboColorContext.Provider>
    );
}
