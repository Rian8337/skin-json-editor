import { PropsWithChildren, createContext, useState } from "react";
import { createNumberJSONResettable } from "../../../utils/ResettableFactory";

const defaultValue = -1;
const minValue = -1;

export const OptionsButtonScaleContext = createContext(
    createNumberJSONResettable(defaultValue, minValue)
);

export function OptionsButtonScaleContextProvider(props: PropsWithChildren) {
    const [value, setValue] = useState(defaultValue);

    return (
        <OptionsButtonScaleContext.Provider
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
                    if (value < 0 && value !== defaultValue) {
                        setValue(defaultValue);
                        return;
                    }

                    setValue(value);
                },
                saveToJSON(json) {
                    if (!this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.useNewLayout = true;

                        json.Layout.OptionsButton ??= {};
                        json.Layout.OptionsButton.scale = value;
                    }
                },
            }}
        >
            {props.children}
        </OptionsButtonScaleContext.Provider>
    );
}
