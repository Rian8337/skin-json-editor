/**
 * Converts circle size to scale.
 *
 * @param cs The circle size.
 * @param height The height of the playfield.
 * @returns The scale.
 */
export function circleSizeToScale(cs: number, height: number): number {
    const width = (height * 4) / 3;

    return Math.max(
        (((1280 * width) / height / 480) * (54.42 - cs * 4.48) * 2) / 128 +
            (0.5 * (11 - 5.2450170716245195)) / 5,
        1e-3,
    );
}

/**
 * Converts scale to radius.
 *
 * @param scale The scale.
 * @param height The height of the playfield.
 * @returns The radius.
 */
export function scaleToRadius(scale: number, height: number): number {
    const width = (height * 4) / 3;

    return (
        (64 * Math.max(scale, 1e-3)) /
        ((((1280 * width) / height) * 0.85) / 384)
    );
}
