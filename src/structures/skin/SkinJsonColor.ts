/**
 * Represents the `Color` section of skin.json.
 */
export interface SkinJsonColor {
    /**
     * The background color of a beatmapset item in song selection menu, in hex code.
     *
     * The default value is set internally in-game.
     */
    MenuItemDefaultColor?: string;

    /**
     * The background color of a beatmapset item in song selection menu when
     * it is tapped on, in hex code.
     *
     * The default value is set internally in-game.
     */
    MenuItemOnTouchColor?: string;

    /**
     * The background color of each difficulty in a beatmapset item when the
     * beatmapset item is selected in the song selection menu, in hex code.
     *
     * The default value is set internally in-game.
     */
    MenuItemVersionsDefaultColor?: string;

    /**
     * The background color of a difficulty in a beatmapset item when the
     * difficulty is selected in the song selection menu, in hex code.
     *
     * The default value is set internally in-game.
     */
    MenuItemVersionsSelectedColor?: string;

    /**
     * The text color of a selected difficulty in a beatmapset item when
     * the beatmapset item is selected, in hex code.
     *
     * The default value is set internally in-game.
     */
    MenuItemSelectedTextColor?: string;

    /**
     * The text color of difficulties that are not selected in a beatmapset
     * item when the beatmapset item is selected, in hex code.
     */
    MenuItemDefaultTextColor?: string;
}
