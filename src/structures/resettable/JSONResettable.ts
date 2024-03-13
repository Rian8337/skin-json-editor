import { SkinJson } from "../skin/SkinJson";
import { Resettable } from "./Resettable";

/**
 * A storage structure that allows the stored value to be reset and saved to a skin.json.
 */
export interface JSONResettable<T = unknown> extends Resettable<T> {
    /**
     * Saves this `Resettable` data to a skin.json.
     *
     * If the data cannot be saved, an error will be thrown.
     *
     * @param json The skin.json to save to.
     */
    saveToJSON(json: SkinJson): void;
}
