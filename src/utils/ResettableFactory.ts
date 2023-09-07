import { NumberResettable } from "../structures/resettable/NumberResettable";
import { Resettable } from "../structures/resettable/Resettable";

/**
 * Creates a template `Resettable` with a default value.
 *
 * @param defaultValue The default value.
 * @returns A template `Resettable`.
 */
export function createResettable<T>(defaultValue: T): Resettable<T> {
    return {
        defaultValue,
        value: defaultValue,
        reset: () => {},
        get isDefault() {
            return this.value === defaultValue;
        },
        setValue: () => {},
        saveToJSON: () => {},
    };
}

/**
 * Creates a template `NumberResettable`.
 *
 * @param defaultValue The default value.
 * @param minValue The minimum value.
 * @param maxValue The maximum value.
 * @param step The precision allowed.
 */
export function createNumberResettable(
    defaultValue: number,
    minValue?: number,
    maxValue?: number,
    step?: number
): NumberResettable {
    return {
        ...createResettable(defaultValue),
        minValue,
        maxValue,
        step,
    };
}
