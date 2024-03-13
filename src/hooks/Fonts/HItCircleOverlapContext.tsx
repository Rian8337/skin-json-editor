import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = -2;
const step = 1;

export const HitCircleOverlapContext = createContext(
    createNumberJSONResettable(defaultValue, undefined, undefined, step)
);

export function HitCircleOverlapContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <HitCircleOverlapContext.Provider
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
                    setValue(Math.trunc(value));
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Fonts ??= {};
                        json.Fonts.hitCircleOverlap = value;
                    }
                },
            }}
        >
            {props.children}
        </HitCircleOverlapContext.Provider>
    );
}
