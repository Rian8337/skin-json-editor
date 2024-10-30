import { SkinJson } from "../skin/SkinJson";
import { ResettableJSONSaveHandler } from "./ResettableJSONSaveHandler";
import { ResettableJSONPropertyGetter } from "./ResettableJSONPropertyGetter";
import { ResettableStateHook } from "./ResettableStateHook";
import { ResettableJSONPropertyValidator } from "./ResettableJSONPropertyValidator";

/**
 * A storage structure that allows the stored value to be reset.
 */
export class Resettable<T> {
    /**
     * The default value.
     */
    readonly defaultValue: T;

    /**
     * The current value.
     */
    protected _value: T;

    /**
     * The current value.
     */
    get value(): T {
        return this.stateHook?.[0] ?? this._value;
    }

    /**
     * The function to call when getting a value from a skin.json.
     */
    jsonPropertyGetter?: ResettableJSONPropertyGetter<T>;

    /**
     * The function to call when validating a value from a skin.json.
     */
    jsonPropertyValidator?: ResettableJSONPropertyValidator<T>;

    /**
     * The function to call when saving to a skin.json.
     */
    jsonSaveHandler?: ResettableJSONSaveHandler<this>;

    /**
     * The state hook attached to this `Resettable`.
     */
    private stateHook?: ResettableStateHook<T>;

    /**
     * Whether the stored value is the default value.
     */
    get isDefault(): boolean {
        return this.value === this.defaultValue;
    }

    /**
     * Whether this `Resettable` can be loaded from a skin.json.
     */
    get canLoadFromSkinJson(): boolean {
        return !!this.jsonPropertyGetter;
    }

    /**
     * Whether this `Resettable` can be saved to a skin.json.
     */
    get canSaveToSkinJson() {
        return !!this.jsonSaveHandler;
    }

    /**
     * Creates a new `Resettable`.
     *
     * @param defaultValue The default value of this `Resettable`.
     */
    constructor(defaultValue: T) {
        this.defaultValue = defaultValue;
        this._value = defaultValue;
    }

    /**
     * Attaches a React state hook to this `Resettable`.
     *
     * Calling this will detach the currently attached state hook.
     *
     * @param stateHook The state hook to attach.
     */
    attachStateHook(stateHook: ResettableStateHook<T>) {
        this.detachStateHook();

        const value = this._value;

        this.stateHook = stateHook;

        if (this._value !== value) {
            // Trigger value change so that the new state hook gets the correct value.
            this.setValue(value);
        }
    }

    /**
     * Detaches the current React state hook from this `Resettable`.
     */
    detachStateHook() {
        delete this.stateHook;
    }

    /**
     * Sets the value of this `Resettable`.
     *
     * @param value The new value. Defaults to the default value.
     */
    setValue(value = this.defaultValue) {
        this.jsonPropertyValidator?.(value);

        this._value = value;
        this.stateHook?.[1](value);
    }

    /**
     * Loads this `Resettable` data from a skin.json.
     *
     * @param json The skin.json to load from.
     * @param fallbackToDefault Whether to fallback to the default value if the value is not found in the skin.json.
     */
    loadFromJSON(json: SkinJson, fallbackToDefault: boolean) {
        if (!this.canLoadFromSkinJson) {
            throw new Error(
                "This `Resettable` cannot be loaded from a skin.json."
            );
        }

        const value = this.jsonPropertyGetter?.(json);

        if (value === undefined && !fallbackToDefault) {
            return;
        }

        this.setValue(value);
    }

    /**
     * Saves this `Resettable` data to a skin.json.
     *
     * @param json The skin.json to save to.
     */
    saveToJSON(json: SkinJson) {
        if (!this.canSaveToSkinJson) {
            throw new Error(
                "This `Resettable` cannot be saved to a skin.json."
            );
        }

        if (this.isDefault) {
            return;
        }

        this.jsonPropertyValidator?.(this.value);
        this.jsonSaveHandler?.call(this, json);
    }

    /**
     * Resets the stored value to the default value.
     */
    reset() {
        this.setValue(this.defaultValue);
    }

    /**
     * Clones this `Resettable` without cloning its React state hook.
     *
     * @returns The cloned `Resettable`.
     */
    clone(): Resettable<T> {
        const clone = new Resettable(this.defaultValue);

        clone._value = this._value;

        clone.jsonPropertyGetter = this.jsonPropertyGetter;
        clone.jsonPropertyValidator = this.jsonPropertyValidator;

        clone.jsonSaveHandler = this.jsonSaveHandler as
            | ResettableJSONSaveHandler<Resettable<T>>
            | undefined;

        return clone;
    }

    /**
     * Creates a new `Resettable` using the default values of this `Resettable`.
     *
     * @param stateHook The state hook to attach to the new `Resettable`.
     * @returns The new `Resettable`.
     */
    with(stateHook: ResettableStateHook<T>): Resettable<T> {
        const clone = this.clone();

        clone.attachStateHook(stateHook);

        return clone;
    }
}
