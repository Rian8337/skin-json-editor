import { SkinJson } from "@structures/skin/SkinJson";

/**
 * A function that gets a value from a skin.json.
 */
export type ResettableJSONPropertyGetter<T> = (json: SkinJson) => T | undefined;
