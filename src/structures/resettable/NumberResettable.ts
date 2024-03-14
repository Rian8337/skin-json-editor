import { Resettable } from "./Resettable";

/**
 * A number `Resettable` that has additional properties to deal with numbers.
 */
export interface NumberResettable extends Omit<Resettable<number>, "setValue"> {
    /**
     * Sets the value of this `NumberResettable`.
     *
     * @param value The new value. Defaults to the default value.
     */
    setValue(value?: number): void;

    /**
     * The minimum number allowed.
     */
    readonly minValue?: number;

    /**
     * The maximum number allowed.
     */
    readonly maxValue?: number;

    /**
     * The precision allowed.
     */
    readonly step?: number;
}

/**
 * Determines if a `Resettable` is a `NumberResettable`.
 *
 * @param resettable The `Resettable`.
 */
export function isNumberResettable(
    resettable: Resettable
): resettable is NumberResettable {
    return typeof resettable.value === "number";
}
