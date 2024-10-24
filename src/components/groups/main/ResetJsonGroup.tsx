import { useContext } from "react";
import { MenuItemDefaultColorContext } from "@hooks/Color/MenuItemDefaultColorContext";
import { MenuItemDefaultTextColorContext } from "@hooks/Color/MenuItemDefaultTextColorContext";
import { MenuItemOnTouchColorContext } from "@hooks/Color/MenuItemOnTouchColorContext";
import { MenuItemSelectedTextColorContext } from "@hooks/Color/MenuItemSelectedTextColorContext";
import { MenuItemVersionsDefaultColorContext } from "@hooks/Color/MenuItemVersionsDefaultColorContext";
import { MenuItemVersionsSelectedColorContext } from "@hooks/Color/MenuItemVersionsSelectedColorContext";
import { ComboColorsContext } from "@hooks/ComboColor/ComboColorsContext";
import { ForceOverrideContext } from "@hooks/ComboColor/ForceOverrideContext";
import { BackButtonHeightContext } from "@hooks/Layout/BackButton/BackButtonHeightContext";
import { BackButtonScaleContext } from "@hooks/Layout/BackButton/BackButtonScaleContext";
import { BackButtonScaleWhenHoldContext } from "@hooks/Layout/BackButton/BackButtonScaleWhenHoldContext";
import { BackButtonWidthContext } from "@hooks/Layout/BackButton/BackButtonWidthContext";
import { BackButtonXContext } from "@hooks/Layout/BackButton/BackButtonXContext";
import { BackButtonYContext } from "@hooks/Layout/BackButton/BackButtonYContext";
import { ModsButtonHeightContext } from "@hooks/Layout/ModsButton/ModsButtonHeightContext";
import { ModsButtonScaleContext } from "@hooks/Layout/ModsButton/ModsButtonScaleContext";
import { ModsButtonWidthContext } from "@hooks/Layout/ModsButton/ModsButtonWidthContext";
import { ModsButtonXContext } from "@hooks/Layout/ModsButton/ModsButtonXContext";
import { ModsButtonYContext } from "@hooks/Layout/ModsButton/ModsButtonYContext";
import { OptionsButtonHeightContext } from "@hooks/Layout/OptionsButton/OptionsButtonHeightContext";
import { OptionsButtonScaleContext } from "@hooks/Layout/OptionsButton/OptionsButtonScaleContext";
import { OptionsButtonWidthContext } from "@hooks/Layout/OptionsButton/OptionsButtonWidthContext";
import { OptionsButtonXContext } from "@hooks/Layout/OptionsButton/OptionsButtonXContext";
import { OptionsButtonYContext } from "@hooks/Layout/OptionsButton/OptionsButtonYContext";
import { RandomButtonHeightContext } from "@hooks/Layout/RandomButton/RandomButtonHeightContext";
import { RandomButtonScaleContext } from "@hooks/Layout/RandomButton/RandomButtonScaleContext";
import { RandomButtonWidthContext } from "@hooks/Layout/RandomButton/RandomButtonWidthContext";
import { RandomButtonXContext } from "@hooks/Layout/RandomButton/RandomButtonXContext";
import { RandomButtonYContext } from "@hooks/Layout/RandomButton/RandomButtonYContext";
import { SliderBodyBaseAlphaContext } from "@hooks/Slider/SliderBodyBaseAlphaContext";
import { SliderBodyColorContext } from "@hooks/Slider/SliderBodyColorContext";
import { SliderBodyWidthContext } from "@hooks/Slider/SliderBodyWidthContext";
import { SliderBorderColorContext } from "@hooks/Slider/SliderBorderColorContext";
import { SliderBorderWidthContext } from "@hooks/Slider/SliderBorderWidthContext";
import { SliderFollowComboColorContext } from "@hooks/Slider/SliderFollowComboColorContext";
import { SliderHintAlphaContext } from "@hooks/Slider/SliderHintAlphaContext";
import { SliderHintColorContext } from "@hooks/Slider/SliderHintColorContext";
import { SliderHintEnableContext } from "@hooks/Slider/SliderHintEnableContext";
import { SliderHintShowMinLengthContext } from "@hooks/Slider/SliderHintShowMinLengthContext";
import { SliderHintWidthContext } from "@hooks/Slider/SliderHintWidthContext";
import { ComboTextScaleContext } from "@hooks/Utils/ComboTextScaleContext";
import { DisableKiaiContext } from "@hooks/Utils/DisableKiaiContext";
import { LimitComboTextLengthContext } from "@hooks/Utils/LimitComboTextLengthContext";
import Group from "../Group";
import "./ResetJsonGroup.css";
import { ComboPrefixContext } from "@hooks/Fonts/ComboPrefixContext";
import { ScorePrefixContext } from "@hooks/Fonts/ScorePrefixContext";
import { HitCirclePrefixContext } from "@hooks/Fonts/HitCirclePrefixContext";
import { HitCircleOverlapContext } from "@hooks/Fonts/HItCircleOverlapContext";
import { AnimationFrameContext } from "@hooks/Utils/AnimationFramerateContext";
import { RotateCursorContext } from "@hooks/Cursor/RotateCursorContext";
import { DifficultySwitcherHeightContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherHeightContext";
import { DifficultySwitcherScaleContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherScaleContext";
import { DifficultySwitcherWidthContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherWidthContext";
import { DifficultySwitcherXContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherXContext";
import { DifficultySwitcherYContext } from "@hooks/Layout/DifficultySwitcher/ModsButtonYContext";
import { LayeredHitSoundsContext } from "@hooks/Utils/LayeredHitSoundsContext";
import { SpinnerFrequencyModulateContext } from "@hooks/Utils/SpinnerFrequencyModulateContext";

export default function ResetJsonGroup() {
    // A bit dirty, but oh well...

    // ComboColor
    const forceOverride = useContext(ForceOverrideContext);
    const comboColors = useContext(ComboColorsContext);

    // Slider
    const sliderBodyWidth = useContext(SliderBodyWidthContext);
    const sliderBorderWidth = useContext(SliderBorderWidthContext);
    const sliderBodyBaseAlpha = useContext(SliderBodyBaseAlphaContext);
    const sliderFollowComboColor = useContext(SliderFollowComboColorContext);
    const sliderBodyColor = useContext(SliderBodyColorContext);
    const sliderBorderColor = useContext(SliderBorderColorContext);
    const sliderHintEnable = useContext(SliderHintEnableContext);
    const sliderHintAlpha = useContext(SliderHintAlphaContext);
    const sliderHintColor = useContext(SliderHintColorContext);
    const sliderHintWidth = useContext(SliderHintWidthContext);
    const sliderHintShowMinLength = useContext(SliderHintShowMinLengthContext);

    // Cursor
    const rotateCursor = useContext(RotateCursorContext);

    // Utilities
    const limitComboTextLength = useContext(LimitComboTextLengthContext);
    const disableKiai = useContext(DisableKiaiContext);
    const comboTextScale = useContext(ComboTextScaleContext);
    const animationFramerate = useContext(AnimationFrameContext);
    const layeredHitSounds = useContext(LayeredHitSoundsContext);
    const spinnerFrequencyModulate = useContext(
        SpinnerFrequencyModulateContext
    );

    // Color
    const menuItemDefaultColor = useContext(MenuItemDefaultColorContext);
    const menuItemOnTouchColor = useContext(MenuItemOnTouchColorContext);
    const menuItemVersionsDefaultColor = useContext(
        MenuItemVersionsDefaultColorContext
    );
    const menuItemVersionsSelectedColor = useContext(
        MenuItemVersionsSelectedColorContext
    );
    const menuItemDefaultTextColor = useContext(
        MenuItemDefaultTextColorContext
    );
    const menuItemSelectedTextColor = useContext(
        MenuItemSelectedTextColorContext
    );

    // Fonts
    const comboPrefix = useContext(ComboPrefixContext);
    const scorePrefix = useContext(ScorePrefixContext);
    const hitCirclePrefix = useContext(HitCirclePrefixContext);
    const hitCircleOverlap = useContext(HitCircleOverlapContext);

    // Layout
    // Back Button
    const backButtonWidth = useContext(BackButtonWidthContext);
    const backButtonHeight = useContext(BackButtonHeightContext);
    const backButtonScale = useContext(BackButtonScaleContext);
    const backButtonX = useContext(BackButtonXContext);
    const backButtonY = useContext(BackButtonYContext);
    const backButtonScaleWhenHold = useContext(BackButtonScaleWhenHoldContext);

    // Mods Button
    const modsButtonWidth = useContext(ModsButtonWidthContext);
    const modsButtonHeight = useContext(ModsButtonHeightContext);
    const modsButtonScale = useContext(ModsButtonScaleContext);
    const modsButtonX = useContext(ModsButtonXContext);
    const modsButtonY = useContext(ModsButtonYContext);

    // Options Button
    const optionsButtonWidth = useContext(OptionsButtonWidthContext);
    const optionsButtonHeight = useContext(OptionsButtonHeightContext);
    const optionsButtonScale = useContext(OptionsButtonScaleContext);
    const optionsButtonX = useContext(OptionsButtonXContext);
    const optionsButtonY = useContext(OptionsButtonYContext);

    // Random Button
    const randomButtonWidth = useContext(RandomButtonWidthContext);
    const randomButtonHeight = useContext(RandomButtonHeightContext);
    const randomButtonScale = useContext(RandomButtonScaleContext);
    const randomButtonX = useContext(RandomButtonXContext);
    const randomButtonY = useContext(RandomButtonYContext);

    // Difficulty Switcher Button
    const difficultySwitcherWidth = useContext(DifficultySwitcherWidthContext);
    const difficultySwitcherHeight = useContext(
        DifficultySwitcherHeightContext
    );
    const difficultySwitcherScale = useContext(DifficultySwitcherScaleContext);
    const difficultySwitcherX = useContext(DifficultySwitcherXContext);
    const difficultySwitcherY = useContext(DifficultySwitcherYContext);

    const onClick = () => {
        const confirmation = confirm(
            "Are you sure you want to reset all configurations to their default state?"
        );

        if (!confirmation) {
            return;
        }

        // ComboColor
        forceOverride.reset();
        comboColors.reset();

        // Slider
        sliderBodyWidth.reset();
        sliderBorderWidth.reset();
        sliderBodyBaseAlpha.reset();
        sliderFollowComboColor.reset();
        sliderBodyColor.reset();
        sliderBorderColor.reset();
        sliderHintEnable.reset();
        sliderHintAlpha.reset();
        sliderHintColor.reset();
        sliderHintWidth.reset();
        sliderHintShowMinLength.reset();

        // Cursor
        rotateCursor.reset();

        // Utilities
        limitComboTextLength.reset();
        disableKiai.reset();
        comboTextScale.reset();
        animationFramerate.reset();
        layeredHitSounds.reset();
        spinnerFrequencyModulate.reset();

        // Color
        menuItemDefaultColor.reset();
        menuItemOnTouchColor.reset();
        menuItemVersionsDefaultColor.reset();
        menuItemVersionsSelectedColor.reset();
        menuItemDefaultTextColor.reset();
        menuItemSelectedTextColor.reset();

        // Fonts
        comboPrefix.reset();
        scorePrefix.reset();
        hitCirclePrefix.reset();
        hitCircleOverlap.reset();

        // Layout
        // Back button
        backButtonWidth.reset();
        backButtonHeight.reset();
        backButtonScale.reset();
        backButtonX.reset();
        backButtonY.reset();
        backButtonScaleWhenHold.reset();

        // Mods button
        modsButtonWidth.reset();
        modsButtonHeight.reset();
        modsButtonScale.reset();
        modsButtonX.reset();
        modsButtonY.reset();

        // Options button
        optionsButtonWidth.reset();
        optionsButtonHeight.reset();
        optionsButtonScale.reset();
        optionsButtonX.reset();
        optionsButtonY.reset();

        // Random button
        randomButtonWidth.reset();
        randomButtonHeight.reset();
        randomButtonScale.reset();
        randomButtonX.reset();
        randomButtonY.reset();

        // Difficulty switcher button
        difficultySwitcherWidth.reset();
        difficultySwitcherHeight.reset();
        difficultySwitcherScale.reset();
        difficultySwitcherX.reset();
        difficultySwitcherY.reset();

        alert("All configurations have been reset successfully!");
    };

    return (
        <Group title="Reset skin.json">
            <div className="group-description reset-json-group-description">
                This will reset all configurations to their default state.
            </div>

            <div className="reset-json-button-container">
                <input
                    className="reset-json-button"
                    type="button"
                    onClick={onClick}
                    value="Reset"
                />
            </div>
        </Group>
    );
}
