import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createResettable } from "../../../utils/ResettableFactory";
import { NumberResettable } from "../../../structures/resettable/NumberResettable";
import { UseNewLayoutContext } from "../UseNewLayoutContext";

const defaultValue = -1;
const minValue = -1;

export const OptionsButtonScaleContext = createContext<NumberResettable>({
    ...createResettable(defaultValue),
    minValue,
});

export function OptionsButtonScaleContextProvider(props: PropsWithChildren) {
    const useNewLayout = useContext(UseNewLayoutContext);
    const [value, setValue] = useState(defaultValue);

    return (
        <OptionsButtonScaleContext.Provider
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
                    if (value < 0 && value !== defaultValue) {
                        setValue(defaultValue);
                        return;
                    }

                    setValue(value);
                },
                saveToJSON(json) {
                    if (useNewLayout.value && !this.isDefault) {
                        json.Layout ??= {};
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
