import { SkinJsonColor } from "./SkinJsonColor";
import { SkinJsonComboColor } from "./SkinJsonComboColor";
import { SkinJsonCursor } from "./SkinJsonCursor";
import { SkinJsonFonts } from "./SkinJsonFonts";
import { SkinJsonLayout } from "./SkinJsonLayout";
import { SkinJsonSlider } from "./SkinJsonSlider";
import { SkinJsonUtils } from "./SkinJsonUtils";

/**
 * Represents a skin.json file structure.
 */
export interface SkinJson {
    /**
     * The `ComboColor` section of this skin.json.
     */
    ComboColor?: SkinJsonComboColor;

    /**
     * The `Slider` section of this skin.json.
     */
    Slider?: SkinJsonSlider;

    /**
     * The `Utils` section of this skin.json.
     */
    Utils?: SkinJsonUtils;

    /**
     * The `Layout` section of this skin.json.
     */
    Layout?: SkinJsonLayout;

    /**
     * The `Color` section of this skin.json.
     */
    Color?: SkinJsonColor;

    /**
     * The `Cursor` section of this skin.json.
     */
    Cursor?: SkinJsonCursor;

    /**
     * The `Fonts` section of this skin.json.
     */
    Fonts?: SkinJsonFonts;

    /**
     * The `HUD` section of this skin.json.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HUD?: any;
}
