import { SkinJson } from "@structures/skin/SkinJson";

/**
 * A function that saves the data of a `Resettable` with respect to a skin.json.
 */
export type ResettableJSONSaveHandler<T> = (this: T, json: SkinJson) => void;
