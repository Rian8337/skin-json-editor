/**
 * A function that validates a value from a skin.json.
 *
 * Throws an error if the value is invalid.
 */
export type ResettableJSONPropertyValidator<T> = (value: T) => void;
