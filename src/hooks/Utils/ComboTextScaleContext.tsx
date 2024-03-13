import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = 1;
const minValue = 0;

export const ComboTextScaleContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function ComboTextScaleContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <ComboTextScaleContext.Provider
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
                        json.Utils ??= {};
                        json.Utils.comboTextScale = value;
                    }
                },
            }}
        >
            {props.children}
        </ComboTextScaleContext.Provider>
    );
}
