/**
 * Represents available settings in a `Layout` part of skin.json.
 */
export interface SkinJsonLayoutSettings {
    /**
     * The width of the element.
     *
     * Defaults to -1, which fallbacks to the element's original width.
     */
    w?: number;

    /**
     * The height of the element.
     *
     * Defaults to -1, which fallbacks to the element's original height.
     */
    h?: number;

    /**
     * The horizontal position of the element offset from the left of the screen, in pixels.
     */
    x?: number;

    /**
     * The vertical position of the element offset from the bottom of the screen, in pixels.
     */
    y?: number;

    /**
     * The factor at which the size of the element will be scaled with. A bigger number means bigger size.
     *
     * Defaults to 1.5.
     */
    scale?: number;
}
