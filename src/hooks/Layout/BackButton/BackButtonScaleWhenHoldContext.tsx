import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UseNewLayoutContext } from "../UseNewLayoutContext";
import { createResettable } from "../../../utils/ResettableFactory";

const defaultValue = true;

export const BackButtonScaleWhenHoldContext = createContext(
    createResettable(defaultValue)
);

export function BackButtonScaleWhenHoldContextProvider(
    props: PropsWithChildren
) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <BackButtonScaleWhenHoldContext.Provider
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
                    if (useNewLayout.value && !this.isDefault) {
                        json.Layout ??= {};
                        json.Layout.BackButton ??= {};
                        json.Layout.BackButton.scaleWhenHold = value;
                    }
                },
            }}
        >
            {props.children}
        </BackButtonScaleWhenHoldContext.Provider>
    );
}
