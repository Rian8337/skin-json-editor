/**
 * Determines if a hex color is valid.
 *
 * @param hexColor The hex color to validate. If empty, automatically returns `true`.
 * @returns Whether the color is valid.
 */
export function validateColor(hexColor?: string): boolean {
    return !hexColor || /^#[0-9A-F]{6}$/i.test(hexColor);
}

/**
 * Creates an error that warns the user about a hex color error.
 *
 * @param prefix The prefix of the error.
 */
export function createColorError(prefix: string): Error {
    return new Error(
        `${prefix}. Please ensure it is prefixed with a hash tag (#) and only consist of numbers and characters from A to F.`,
    );
}
