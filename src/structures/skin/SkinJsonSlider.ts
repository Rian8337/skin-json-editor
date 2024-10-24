/**
 * Represents the `Slider` section of skin.json.
 */
export interface SkinJsonSlider {
    /**
     * The width of a slider's body.
     *
     * Defaults to 61.
     */
    sliderBodyWidth?: number;

    /**
     * The width of a slider's border.
     *
     * Defaults to 5.2.
     */
    sliderBorderWidth?: number;

    /**
     * The transparency of a slider's body. 0 means the body is fully
     * invisible, while 1 means the body is fully opaque.
     *
     * Defaults to 0.7.
     */
    sliderBodyBaseAlpha?: number;

    /**
     * Whether the color of a slider's body should follow the color of its combo sequence.
     *
     * Defaults to `false`.
     */
    sliderFollowComboColor?: boolean;

    /**
     * The color that a slider's body will use if the slider is not
     * set to follow the color of its combo sequence.
     *
     * Defaults to `#FFFFFF`.
     */
    sliderBodyColor?: string;

    /**
     * The color that a slider's border will use if the slider is not
     * set to follow the color of its combo sequence.
     *
     * Defaults to `#FFFFFF`.
     */
    sliderBorderColor?: string;

    /**
     * Whether the slider ball should be flipped horizontally when a slider is reversed.
     *
     * Defaults to `true`.
     */
    sliderBallFlip?: boolean;

    /**
     * Whether to enable slider hints.
     *
     * When a slider exceeds a certain length, its path will be indicated
     * clearly with a line down the middle of the slider's body.
     *
     * Defaults to `false`.
     */
    sliderHintEnable?: boolean;

    /**
     * The transparency of the slider hint. 0 means the slider hint will be
     * fully invisible, while 1 means the slider hint will be fully opaque.
     *
     * Defaults to 0.3.
     */
    sliderHintAlpha?: number;

    /**
     * The color of the slider hint.
     *
     * Defaults to the color of the slider's body.
     */
    sliderHintColor?: string;

    /**
     * The width of the slider hint.
     *
     * Defaults to 3.
     */
    sliderHintWidth?: number;

    /**
     * The minimum length required for a slider to display a slider hint, in osu!pixels.
     *
     * Defaults to 300.
     */
    sliderHintShowMinLength?: number;
}
