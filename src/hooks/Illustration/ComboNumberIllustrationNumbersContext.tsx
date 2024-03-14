import { PropsWithChildren, createContext, useState } from "react";
import { createNumberResettable } from "../../utils/ResettableFactory";

const defaultValue = 1;
const minValue = 1;
const maxValue = 99;

export const ComboNumberIllustrationNumbersContext = createContext(
    createNumberResettable(defaultValue, minValue, maxValue)
);

export function ComboNumberIllustrationNumbersContextProvider(
    props: PropsWithChildren
) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ComboNumberIllustrationNumbersContext.Provider
            value={{
                defaultValue,
                value,
                minValue,
                maxValue,
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
        </ComboNumberIllustrationNumbersContext.Provider>
    );
}
