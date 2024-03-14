/**
 * A storage structure that allows the stored value to be reset.
 */
export interface Resettable<T = unknown> {
    /**
     * The default value.
     */
    readonly defaultValue: T;

    /**
     * The current value.
     */
    readonly value: T;

    /**
     * Resets the stored value to the default value.
     */
    reset(): void;

    /**
     * Whether the stored value is the default value.
     */
    get isDefault(): boolean;

    /**
     * Sets the value of this `Resettable`.
     *
     * @param value The new value. Defaults to the default value.
     */
    setValue(value?: T): void;
}
