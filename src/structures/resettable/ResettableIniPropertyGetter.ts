import { SkinIni } from "@structures/skin/SkinIni";

/**
 * A function that gets a property from a skin.ini file.
 */
export type ResettableIniPropertyGetter<T> = (ini: SkinIni) => T | undefined;
