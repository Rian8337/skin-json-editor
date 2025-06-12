import { FC } from "react";
import * as Color from "./Color";
import * as ComboColor from "./ComboColor";
import * as Cursor from "./Cursor";
import * as Fonts from "./Fonts";
import * as HUD from "./HUD";
import * as Illustration from "./Illustration";
import * as Layout from "./Layout";
import * as Slider from "./Slider";
import * as Utils from "./Utils";
import * as Theme from "./Theme";

const compose =
    (...components: FC<Record<string, unknown>>[]) =>
    (props: { children: JSX.Element }) =>
        components.reduce(
            (children, Current) => <Current {...props}>{children}</Current>,
            props.children
        );

export const Providers = compose(
    // Color
    Color.MenuItemDefaultColorContextProvider,
    Color.MenuItemDefaultTextColorContextProvider,
    Color.MenuItemOnTouchColorContextProvider,
    Color.MenuItemSelectedTextColorContextProvider,
    Color.MenuItemVersionsDefaultColorContextProvider,
    Color.MenuItemVersionsSelectedColorContextProvider,

    // ComboColor
    ComboColor.ComboColorsContextProvider,
    ComboColor.ForceOverrideContextProvider,

    // Cursor
    Cursor.RotateCursorContextProvider,
    Cursor.RotateCursorTrailContextProvider,

    // Fonts
    Fonts.HitCirclePrefixContextProvider,
    Fonts.HitCircleOverlapContextProvider,
    Fonts.ScorePrefixContextProvider,
    Fonts.ScoreOverlapContextProvider,
    Fonts.ComboPrefixContextProvider,
    Fonts.ComboOverlapContextProvider,

    // HUD
    HUD.HUDDataContextProvider,

    // Layout (Back Button)
    Layout.BackButtonHeightContextProvider,
    Layout.BackButtonScaleContextProvider,
    Layout.BackButtonScaleWhenHoldContextProvider,
    Layout.BackButtonWidthContextProvider,
    Layout.BackButtonXContextProvider,
    Layout.BackButtonYContextProvider,

    // Layout (Mods Button)
    Layout.ModsButtonHeightContextProvider,
    Layout.ModsButtonScaleContextProvider,
    Layout.ModsButtonWidthContextProvider,
    Layout.ModsButtonXContextProvider,
    Layout.ModsButtonYContextProvider,

    // Layout (Options Button)
    Layout.OptionsButtonHeightContextProvider,
    Layout.OptionsButtonScaleContextProvider,
    Layout.OptionsButtonWidthContextProvider,
    Layout.OptionsButtonXContextProvider,
    Layout.OptionsButtonYContextProvider,

    // Layout (Random Button)
    Layout.RandomButtonHeightContextProvider,
    Layout.RandomButtonScaleContextProvider,
    Layout.RandomButtonWidthContextProvider,
    Layout.RandomButtonXContextProvider,
    Layout.RandomButtonYContextProvider,

    // Slider
    Slider.SliderBodyBaseAlphaContextProvider,
    Slider.SliderBodyColorContextProvider,
    Slider.SliderBodyWidthContextProvider,
    Slider.SliderBorderColorContextProvider,
    Slider.SliderBorderWidthContextProvider,
    Slider.SliderFollowComboColorContextProvider,
    Slider.SliderBallFlipContextProvider,
    Slider.SliderHintAlphaContextProvider,
    Slider.SliderHintColorContextProvider,
    Slider.SliderHintEnableContextProvider,
    Slider.SliderHintShowMinLengthContextProvider,
    Slider.SliderHintWidthContextProvider,

    // Utils
    Utils.ComboTextScaleContextProvider,
    Utils.DisableKiaiContextProvider,
    Utils.LimitComboTextLengthContextProvider,
    Utils.AnimationFramerateContextProvider,
    Utils.LayeredHitSoundsContextProvider,
    Utils.SpinnerFrequencyModulateContextProvider,

    // Slider Illustration
    Illustration.SliderIllustrationCircleSizeContextProvider,
    Illustration.SliderIllustrationComboColorContextProvider,

    // Combo Number Illustration
    Illustration.ComboNumberIllustrationCircleSizeContextProvider,
    Illustration.ComboNumberIllustrationNumbersContextProvider,

    // Theme
    Theme.ThemeAccentColorContextProvider
);
