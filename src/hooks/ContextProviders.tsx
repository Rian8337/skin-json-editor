import { FC } from "react";
import { MenuItemDefaultColorContextProvider } from "./Color/MenuItemDefaultColorContext";
import { MenuItemDefaultTextColorContextProvider } from "./Color/MenuItemDefaultTextColorContext";
import { MenuItemOnTouchColorContextProvider } from "./Color/MenuItemOnTouchColorContext";
import { MenuItemSelectedTextColorContextProvider } from "./Color/MenuItemSelectedTextColorContext";
import { MenuItemVersionsDefaultColorContextProvider } from "./Color/MenuItemVersionsDefaultColorContext";
import { MenuItemVersionsSelectedColorContextProvider } from "./Color/MenuItemVersionsSelectedColorContext";
import { ComboColorsContextProvider } from "./ComboColor/ComboColorsContext";
import { ForceOverrideContextProvider } from "./ComboColor/ForceOverrideContext";
import { RotateCursorContextProvider } from "./Cursor/RotateCursorContext";
import { ComboPrefixContextProvider } from "./Fonts/ComboPrefixContext";
import { HitCirclePrefixContextProvider } from "./Fonts/HitCirclePrefixContext";
import { ScorePrefixContextProvider } from "./Fonts/ScorePrefixContext";
import { BackButtonHeightContextProvider } from "./Layout/BackButton/BackButtonHeightContext";
import { BackButtonScaleContextProvider } from "./Layout/BackButton/BackButtonScaleContext";
import { BackButtonScaleWhenHoldContextProvider } from "./Layout/BackButton/BackButtonScaleWhenHoldContext";
import { BackButtonWidthContextProvider } from "./Layout/BackButton/BackButtonWidthContext";
import { ModsButtonHeightContextProvider } from "./Layout/ModsButton/ModsButtonHeightContext";
import { ModsButtonScaleContextProvider } from "./Layout/ModsButton/ModsButtonScaleContext";
import { ModsButtonWidthContextProvider } from "./Layout/ModsButton/ModsButtonWidthContext";
import { OptionsButtonHeightContextProvider } from "./Layout/OptionsButton/OptionsButtonHeightContext";
import { OptionsButtonScaleContextProvider } from "./Layout/OptionsButton/OptionsButtonScaleContext";
import { OptionsButtonWidthContextProvider } from "./Layout/OptionsButton/OptionsButtonWidthContext";
import { RandomButtonHeightContextProvider } from "./Layout/RandomButton/RandomButtonHeightContext";
import { RandomButtonWidthContextProvider } from "./Layout/RandomButton/RandomButtonWidthContext";
import { RandomButtonScaleContextProvider } from "./Layout/RandomButton/RandomButtonScaleContext";
import { SliderBodyBaseAlphaContextProvider } from "./Slider/SliderBodyBaseAlphaContext";
import { SliderBodyColorContextProvider } from "./Slider/SliderBodyColorContext";
import { SliderBodyWidthContextProvider } from "./Slider/SliderBodyWidthContext";
import { SliderBorderColorContextProvider } from "./Slider/SliderBorderColorContext";
import { SliderBorderWidthContextProvider } from "./Slider/SliderBorderWidthContext";
import { SliderFollowComboColorContextProvider } from "./Slider/SliderFollowComboColorContext";
import { SliderHintAlphaContextProvider } from "./Slider/SliderHintAlphaContext";
import { SliderHintColorContextProvider } from "./Slider/SliderHintColorContext";
import { SliderHintEnableContextProvider } from "./Slider/SliderHintEnableContext";
import { SliderHintShowMinLengthContextProvider } from "./Slider/SliderHintShowMinLengthContext";
import { SliderHintWidthContextProvider } from "./Slider/SliderHintWidthContext";
import { ComboTextScaleContextProvider } from "./Utils/ComboTextScaleContext";
import { DisableKiaiContextProvider } from "./Utils/DisableKiaiContext";
import { LimitComboTextLengthContextProvider } from "./Utils/LimitComboTextLengthContext";
import { BackButtonXContextProvider } from "./Layout/BackButton/BackButtonXContext";
import { BackButtonYContextProvider } from "./Layout/BackButton/BackButtonYContext";
import { ModsButtonXContextProvider } from "./Layout/ModsButton/ModsButtonXContext";
import { ModsButtonYContextProvider } from "./Layout/ModsButton/ModsButtonYContext";
import { OptionsButtonXContextProvider } from "./Layout/OptionsButton/OptionsButtonXContext";
import { OptionsButtonYContextProvider } from "./Layout/OptionsButton/OptionsButtonYContext";
import { RandomButtonXContextProvider } from "./Layout/RandomButton/RandomButtonXContext";
import { RandomButtonYContextProvider } from "./Layout/RandomButton/RandomButtonYContext";
import { HitCircleOverlapContextProvider } from "./Fonts/HItCircleOverlapContext";
import { SliderIllustrationCircleSizeContextProvider } from "./Illustration/SliderIllustrationCircleSizeContext";
import { SliderIllustrationComboColorContextProvider } from "./Illustration/SliderIllustrationComboColorContext";
import { ComboNumberIllustrationCircleSizeContextProvider } from "./Illustration/ComboNumberIllustrationCircleSizeContext";
import { ComboNumberIllustrationNumbersContextProvider } from "./Illustration/ComboNumberIllustrationNumbersContext";
import { DifficultySwitcherHeightContextProvider } from "./Layout/DifficultySwitcher/DifficultySwitcherHeightContext";
import { DifficultySwitcherScaleContextProvider } from "./Layout/DifficultySwitcher/DifficultySwitcherScaleContext";
import { DifficultySwitcherWidthContextProvider } from "./Layout/DifficultySwitcher/DifficultySwitcherWidthContext";
import { DifficultySwitcherXContextProvider } from "./Layout/DifficultySwitcher/DifficultySwitcherXContext";
import { DifficultySwitcherYContextProvider } from "./Layout/DifficultySwitcher/ModsButtonYContext";
import { AnimationFrameContextProvider } from "./Utils/AnimationFramerateContext";
import { LayeredHitSoundsContextProvider } from "./Utils/LayeredHitSoundsContext";
import { SpinnerFrequencyModulateContextProvider } from "./Utils/SpinnerFrequencyModulateContext";
import SliderBallFlipContextProvider from "./Slider/SliderBallFlipContext";

const compose =
    (...components: FC<Record<string, unknown>>[]) =>
    (props: { children: JSX.Element }) =>
        components.reduce(
            (children, Current) => <Current {...props}>{children}</Current>,
            props.children
        );

export const Providers = compose(
    // Color
    MenuItemDefaultColorContextProvider,
    MenuItemDefaultTextColorContextProvider,
    MenuItemOnTouchColorContextProvider,
    MenuItemSelectedTextColorContextProvider,
    MenuItemVersionsDefaultColorContextProvider,
    MenuItemVersionsSelectedColorContextProvider,

    // ComboColor
    ComboColorsContextProvider,
    ForceOverrideContextProvider,

    // Cursor
    RotateCursorContextProvider,

    // Fonts
    ComboPrefixContextProvider,
    HitCirclePrefixContextProvider,
    ScorePrefixContextProvider,
    HitCircleOverlapContextProvider,

    // Layout (BackButton)
    BackButtonHeightContextProvider,
    BackButtonScaleContextProvider,
    BackButtonScaleWhenHoldContextProvider,
    BackButtonWidthContextProvider,
    BackButtonXContextProvider,
    BackButtonYContextProvider,

    // Layout (ModsButton)
    ModsButtonHeightContextProvider,
    ModsButtonScaleContextProvider,
    ModsButtonWidthContextProvider,
    ModsButtonXContextProvider,
    ModsButtonYContextProvider,

    // Layout (OptionsButton)
    OptionsButtonHeightContextProvider,
    OptionsButtonScaleContextProvider,
    OptionsButtonWidthContextProvider,
    OptionsButtonXContextProvider,
    OptionsButtonYContextProvider,

    // Layout (RandomButton)
    RandomButtonHeightContextProvider,
    RandomButtonScaleContextProvider,
    RandomButtonWidthContextProvider,
    RandomButtonXContextProvider,
    RandomButtonYContextProvider,

    // Layout (DifficultySwitcher),
    DifficultySwitcherHeightContextProvider,
    DifficultySwitcherScaleContextProvider,
    DifficultySwitcherWidthContextProvider,
    DifficultySwitcherXContextProvider,
    DifficultySwitcherYContextProvider,

    // Slider
    SliderBodyBaseAlphaContextProvider,
    SliderBodyColorContextProvider,
    SliderBodyWidthContextProvider,
    SliderBorderColorContextProvider,
    SliderBorderWidthContextProvider,
    SliderFollowComboColorContextProvider,
    SliderBallFlipContextProvider,
    SliderHintAlphaContextProvider,
    SliderHintColorContextProvider,
    SliderHintEnableContextProvider,
    SliderHintShowMinLengthContextProvider,
    SliderHintWidthContextProvider,

    // Utils
    ComboTextScaleContextProvider,
    DisableKiaiContextProvider,
    LimitComboTextLengthContextProvider,
    AnimationFrameContextProvider,
    LayeredHitSoundsContextProvider,
    SpinnerFrequencyModulateContextProvider,

    // Slider illustration
    SliderIllustrationCircleSizeContextProvider,
    SliderIllustrationComboColorContextProvider,

    // Combo number illustration
    ComboNumberIllustrationCircleSizeContextProvider,
    ComboNumberIllustrationNumbersContextProvider
);
