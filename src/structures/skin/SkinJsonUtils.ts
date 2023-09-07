/**
 * Represents the `Utils` section of skin.json.
 */
export interface SkinJsonUtils {
    /**
     * Whether to only show the first digit for any combo number above 9.
     *
     * Defaults to `false`.
     */
    limitComboTextLength?: boolean;

    /**
     * Whether to disable kiai flashes.
     *
     * Defaults to `false`.
     */
    disableKiai?: boolean;

    /**
     * Increasing this number will increase the size of numbers in the combo counter, and vice versa.
     *
     * Defaults to 1.
     */
    comboTextScale?: number;
}
