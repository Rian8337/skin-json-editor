import { PropsWithChildren, createContext, useState } from "react";
import { createJSONResettable } from "../../utils/ResettableFactory";

const defaultValue = false;

export const LimitComboTextLengthContext = createContext(
    createJSONResettable(defaultValue)
);

export function LimitComboTextLengthContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <LimitComboTextLengthContext.Provider
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
                        json.Utils ??= {};
                        json.Utils.limitComboTextLength = value;
                    }
                },
            }}
        >
            {props.children}
        </LimitComboTextLengthContext.Provider>
    );
}
