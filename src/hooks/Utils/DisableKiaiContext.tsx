import { PropsWithChildren, createContext, useState } from "react";
import { createResettable } from "../../utils/ResettableFactory";

const defaultValue = false;

export const DisableKiaiContext = createContext(createResettable(defaultValue));

export function DisableKiaiContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <DisableKiaiContext.Provider
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
                        json.Utils.disableKiai = value;
                    }
                },
            }}
        >
            {props.children}
        </DisableKiaiContext.Provider>
    );
}
