import { SkinJson } from "../skin/SkinJson";
import { ResettableJSONSaveHandler } from "./ResettableJSONSaveHandler";
import { ResettableJSONPropertyGetter } from "./ResettableJSONPropertyGetter";
import { ResettableStateHook } from "./ResettableStateHook";
import { ResettableJSONPropertyValidator } from "./ResettableJSONPropertyValidator";
import { ResettableIniPropertyGetter } from "./ResettableIniPropertyGetter";
import { SkinIni } from "@structures/skin/SkinIni";

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
     * The current value without the state hook.
     *
     * Use this if you want to get direct updates to this `Resettable`'s value without waiting for
     * React to update the state hook.
     */
    get directValue(): T {
        return this._value;
    }

    /**
     * The function to call when getting a value from a skin.ini.
     */
    iniPropertyGetter?: ResettableIniPropertyGetter<T>;

    /**
     * The function to call when getting a value from a skin.json.
     */
    jsonPropertyGetter?: ResettableJSONPropertyGetter<T>;

    /**
     * The function to call when validating a value.
     */
    propertyValidator?: ResettableJSONPropertyValidator<T>;

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
     * Whether the value of this `Resettable` can be loaded from a skin.json.
     */
    get loadableFromJSON(): boolean {
        return Boolean(this.jsonPropertyGetter);
    }

    /**
     * Whether the value of this `Resettable` can be loaded from a skin.ini.
     */
    get loadableFromIni(): boolean {
        return Boolean(this.iniPropertyGetter);
    }

    /**
     * Whether the value of this `Resettable` can be saved to a skin.json.
     */
    get savableToJSON(): boolean {
        return Boolean(this.jsonSaveHandler);
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
        // Handle potentially NaN values from user inputs.
        if (typeof value === "number" && Number.isNaN(value)) {
            value = this.defaultValue;
        }

        this.propertyValidator?.(value);

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
        if (!this.jsonPropertyGetter) {
            throw new Error(
                "This `Resettable` cannot be loaded from a skin.json."
            );
        }

        const value = this.jsonPropertyGetter(json);

        if (value === undefined && !fallbackToDefault) {
            return;
        }

        this.setValue(value);
    }

    /**
     * Loads this `Resettable` data from a skin.ini.
     *
     * @param ini The skin.ini to load from.
     * @param fallbackToDefault Whether to fallback to the default value if the value is not found in the skin.ini.
     */
    loadFromIni(ini: SkinIni, fallbackToDefault: boolean) {
        if (!this.iniPropertyGetter) {
            throw new Error(
                "This `Resettable` cannot be loaded from a skin.ini."
            );
        }

        const value = this.iniPropertyGetter(ini);

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
        if (!this.jsonSaveHandler) {
            throw new Error(
                "This `Resettable` cannot be saved to a skin.json."
            );
        }

        if (this.isDefault) {
            return;
        }

        this.propertyValidator?.(this.value);
        this.jsonSaveHandler.call(this, json);
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
        clone.iniPropertyGetter = this.iniPropertyGetter;
        clone.propertyValidator = this.propertyValidator;

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
