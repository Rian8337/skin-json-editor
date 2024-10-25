/**
 * Represents the `Fonts` section of skin.json.
 */
export interface SkinJsonFonts {
    /**
     * The prefix of hitcircle texture file names.
     *
     * Defaults to `default`.
     */
    hitCirclePrefix?: string;

    /**
     * The amount of pixels that the hit circle numbers overlap.
     *
     * Defaults to -2.
     */
    hitCircleOverlap?: number;

    /**
     * The prefix of score number texture file names.
     *
     * Defaults to `score`.
     */
    scorePrefix?: string;

    /**
     * The prefix of combo number texture file names.
     *
     * Defaults to `score`.
     */
    comboPrefix?: string;

    /**
     * The amount of pixels that the combo numbers overlap.
     *
     * Defaults to 0.
     */
    comboOverlap?: number;
}
