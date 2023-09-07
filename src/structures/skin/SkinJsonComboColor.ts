/**
 * Represents the `ComboColor` section of skin.json.
 */
export interface SkinJsonComboColor {
    /**
     * Whether to use the combo colors provided in the colors list of this skin.json.
     *
     * Defaults to `false`.
     */
    forceOverride?: boolean;

    /**
     * The colors of a note combo sequence, in hex code.
     *
     * Defaults to `#FFFFFF`.
     */
    colors?: string[];
}
