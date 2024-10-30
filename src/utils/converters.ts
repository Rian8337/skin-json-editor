/**
 * Converts an RGB string to a hex string.
 *
 * @param rgb The RGB string to convert.
 * @param colorOffset How much to offset the individual colors by. Defaults to 0.
 * @returns The hex string.
 */
export function rgbToHex(rgb: string, colorOffset = 0): string {
    const [r, g, b] = rgb
        .split(",")
        .map((v) => Math.min(255, parseInt(v) + colorOffset));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
