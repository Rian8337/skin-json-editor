import { SkinJsonLayoutSettings } from "./SkinJsonLayoutSettings";

/**
 * Represents the `Layout` section of skin.json.
 */
export interface SkinJsonLayout {
    /**
     * Layout configurations for the back button in song selection menu.
     */
    BackButton?: SkinJsonLayoutSettings & {
        /**
         * Whether to zoom the button when tapped.
         *
         * Defaults to `true`.
         */
        scaleWhenHold?: boolean;
    };

    /**
     * Layout configurations for the mods button in song selection menu.
     */
    ModsButton?: SkinJsonLayoutSettings;

    /**
     * Layout configurations for the options button in song selection menu.
     */
    OptionsButton?: SkinJsonLayoutSettings;

    /**
     * Layout configurations for the random button in song selection menu.
     */
    RandomButton?: SkinJsonLayoutSettings;

    /**
     * Whether to use these layout settings.
     *
     * Defaults to `false`.
     */
    useNewLayout?: boolean;
}
