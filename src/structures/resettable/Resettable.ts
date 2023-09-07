import { SkinJson } from "../skin/SkinJson";

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
     *
     * Note that this should not be mutated directly - use {@link setValue} instead to
     * allow components to re-render.
     */
    readonly value: T;

    /**
     * Resets the stored value to the default value,
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

    /**
     * Saves this `Resettable` data to a skin.json.
     *
     * If the data cannot be saved, an error will be thrown.
     *
     * @param json The skin.json to save to.
     */
    saveToJSON(json: SkinJson): void;
}
