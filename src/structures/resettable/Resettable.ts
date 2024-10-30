import { Dispatch, SetStateAction } from "react";
import { SkinJson } from "../skin/SkinJson";

/**
 * A function that handles the data of a `Resettable` with respect to a skin.json.
 */
export type ResettableJSONHandler<T> = (this: T, json: SkinJson) => void;

/**
 * A React state hook without `undefined` overload.
 */
export type ResettableStateHook<T> = [T, Dispatch<SetStateAction<T>>];

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
     * The function to call when loading from a skin.json.
     */
    protected jsonLoadHandler?: ResettableJSONHandler<this>;

    /**
     * The function to call when saving to a skin.json.
     */
    protected jsonSaveHandler?: ResettableJSONHandler<this>;

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
        return !!this.jsonLoadHandler;
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
        this._value = value;
        this.stateHook?.[1](value);
    }

    /**
     * Sets the function to call when loading from a skin.json.
     *
     * @param jsonLoadHandler The function to call when loading from a skin.json. Set to `undefined` to disable loading.
     */
    setJsonLoadHandler(jsonLoadHandler?: ResettableJSONHandler<this>) {
        this.jsonLoadHandler = jsonLoadHandler;
    }

    /**
     * Sets the function to call when saving to a skin.json.
     *
     * @param jsonSaveHandler The function to call when saving to a skin.json. Set to `undefined` to disable saving.
     */
    setJsonSaveHandler(jsonSaveHandler?: ResettableJSONHandler<this>) {
        this.jsonSaveHandler = jsonSaveHandler;
    }

    /**
     * Loads this `Resettable` data from a skin.json.
     *
     * @param json The skin.json to load from.
     */
    loadFromJSON(json: SkinJson) {
        if (!this.canLoadFromSkinJson) {
            throw new Error(
                "This `Resettable` cannot be loaded from a skin.json."
            );
        }

        this.jsonLoadHandler?.call(this, json);
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

        clone.jsonLoadHandler = this.jsonLoadHandler as
            | ResettableJSONHandler<Resettable<T>>
            | undefined;

        clone.jsonSaveHandler = this.jsonSaveHandler as
            | ResettableJSONHandler<Resettable<T>>
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
