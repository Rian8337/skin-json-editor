import { useContext, useRef } from "react";
import * as Color from "./Color";
import * as ComboColor from "./ComboColor";
import * as Cursor from "./Cursor";
import * as Fonts from "./Fonts";
import * as Layout from "./Layout";
import * as Slider from "./Slider";
import * as Utils from "./Utils";

/**
 * Retrieves *all* skin settings.
 */
export function useSkinSettings() {
    return useRef([
        // ComboColor
        useContext(ComboColor.ForceOverrideContext),
        useContext(ComboColor.ComboColorsContext),

        // Slider
        useContext(Slider.SliderBodyWidthContext),
        useContext(Slider.SliderBorderWidthContext),
        useContext(Slider.SliderBodyBaseAlphaContext),
        useContext(Slider.SliderFollowComboColorContext),
        useContext(Slider.SliderBodyColorContext),
        useContext(Slider.SliderBorderColorContext),
        useContext(Slider.SliderBallFlipContext),
        useContext(Slider.SliderHintEnableContext),
        useContext(Slider.SliderHintAlphaContext),
        useContext(Slider.SliderHintColorContext),
        useContext(Slider.SliderHintWidthContext),
        useContext(Slider.SliderHintShowMinLengthContext),

        // Cursor
        useContext(Cursor.RotateCursorContext),
        useContext(Cursor.RotateCursorTrailContext),

        // Utilities
        useContext(Utils.LimitComboTextLengthContext),
        useContext(Utils.DisableKiaiContext),
        useContext(Utils.ComboTextScaleContext),
        useContext(Utils.AnimationFramerateContext),
        useContext(Utils.LayeredHitSoundsContext),
        useContext(Utils.SpinnerFrequencyModulateContext),

        // Color
        useContext(Color.MenuItemDefaultColorContext),
        useContext(Color.MenuItemOnTouchColorContext),
        useContext(Color.MenuItemVersionsDefaultColorContext),
        useContext(Color.MenuItemVersionsSelectedColorContext),
        useContext(Color.MenuItemDefaultTextColorContext),
        useContext(Color.MenuItemSelectedTextColorContext),

        // Fonts
        useContext(Fonts.ComboPrefixContext),
        useContext(Fonts.ComboOverlapContext),
        useContext(Fonts.ScorePrefixContext),
        useContext(Fonts.ScoreOverlapContext),
        useContext(Fonts.HitCirclePrefixContext),
        useContext(Fonts.HitCircleOverlapContext),

        // Layout
        // Back Button
        useContext(Layout.BackButtonWidthContext),
        useContext(Layout.BackButtonHeightContext),
        useContext(Layout.BackButtonScaleContext),
        useContext(Layout.BackButtonXContext),
        useContext(Layout.BackButtonYContext),
        useContext(Layout.BackButtonScaleWhenHoldContext),

        // Mods Button
        useContext(Layout.ModsButtonWidthContext),
        useContext(Layout.ModsButtonHeightContext),
        useContext(Layout.ModsButtonScaleContext),
        useContext(Layout.ModsButtonXContext),
        useContext(Layout.ModsButtonYContext),

        // Options Button
        useContext(Layout.OptionsButtonWidthContext),
        useContext(Layout.OptionsButtonHeightContext),
        useContext(Layout.OptionsButtonScaleContext),
        useContext(Layout.OptionsButtonXContext),
        useContext(Layout.OptionsButtonYContext),

        // Random Button
        useContext(Layout.RandomButtonWidthContext),
        useContext(Layout.RandomButtonHeightContext),
        useContext(Layout.RandomButtonScaleContext),
        useContext(Layout.RandomButtonXContext),
        useContext(Layout.RandomButtonYContext),
    ]);
}
