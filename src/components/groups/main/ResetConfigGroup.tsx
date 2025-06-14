import * as Color from "@hooks/Color";
import * as ComboColor from "@hooks/ComboColor";
import * as Cursor from "@hooks/Cursor";
import * as Fonts from "@hooks/Fonts";
import * as HUD from "@hooks/HUD";
import * as Layout from "@hooks/Layout";
import * as Slider from "@hooks/Slider";
import * as Theme from "@hooks/Theme";
import * as Utils from "@hooks/Utils";
import { useContext } from "react";
import Group from "../Group";

export default function ResetJsonGroup() {
    // A bit dirty, but oh well...

    // ComboColor
    const forceOverride = useContext(ComboColor.ForceOverrideContext);
    const comboColors = useContext(ComboColor.ComboColorsContext);

    // Slider
    const sliderBodyWidth = useContext(Slider.SliderBodyWidthContext);
    const sliderBorderWidth = useContext(Slider.SliderBorderWidthContext);
    const sliderBodyBaseAlpha = useContext(Slider.SliderBodyBaseAlphaContext);
    const sliderFollowComboColor = useContext(
        Slider.SliderFollowComboColorContext
    );
    const sliderBodyColor = useContext(Slider.SliderBodyColorContext);
    const sliderBorderColor = useContext(Slider.SliderBorderColorContext);
    const sliderBallFlip = useContext(Slider.SliderBallFlipContext);
    const sliderHintEnable = useContext(Slider.SliderHintEnableContext);
    const sliderHintAlpha = useContext(Slider.SliderHintAlphaContext);
    const sliderHintColor = useContext(Slider.SliderHintColorContext);
    const sliderHintWidth = useContext(Slider.SliderHintWidthContext);
    const sliderHintShowMinLength = useContext(
        Slider.SliderHintShowMinLengthContext
    );

    // Cursor
    const rotateCursor = useContext(Cursor.RotateCursorContext);
    const rotateCursorTrail = useContext(Cursor.RotateCursorTrailContext);

    // Utilities
    const limitComboTextLength = useContext(Utils.LimitComboTextLengthContext);
    const disableKiai = useContext(Utils.DisableKiaiContext);
    const comboTextScale = useContext(Utils.ComboTextScaleContext);
    const animationFramerate = useContext(Utils.AnimationFramerateContext);
    const layeredHitSounds = useContext(Utils.LayeredHitSoundsContext);
    const spinnerFrequencyModulate = useContext(
        Utils.SpinnerFrequencyModulateContext
    );

    // Color
    const menuItemDefaultColor = useContext(Color.MenuItemDefaultColorContext);
    const menuItemOnTouchColor = useContext(Color.MenuItemOnTouchColorContext);
    const menuItemVersionsDefaultColor = useContext(
        Color.MenuItemVersionsDefaultColorContext
    );
    const menuItemVersionsSelectedColor = useContext(
        Color.MenuItemVersionsSelectedColorContext
    );
    const menuItemDefaultTextColor = useContext(
        Color.MenuItemDefaultTextColorContext
    );
    const menuItemSelectedTextColor = useContext(
        Color.MenuItemSelectedTextColorContext
    );

    // Fonts
    const comboPrefix = useContext(Fonts.ComboPrefixContext);
    const comboOverlap = useContext(Fonts.ComboOverlapContext);
    const scorePrefix = useContext(Fonts.ScorePrefixContext);
    const hitCirclePrefix = useContext(Fonts.HitCirclePrefixContext);
    const hitCircleOverlap = useContext(Fonts.HitCircleOverlapContext);

    // HUD
    const hudData = useContext(HUD.HUDDataContext);

    // Theme
    const accentColor = useContext(Theme.ThemeAccentColorContext);

    // Layout
    // Back Button
    const backButtonWidth = useContext(Layout.BackButtonWidthContext);
    const backButtonHeight = useContext(Layout.BackButtonHeightContext);
    const backButtonScale = useContext(Layout.BackButtonScaleContext);
    const backButtonX = useContext(Layout.BackButtonXContext);
    const backButtonY = useContext(Layout.BackButtonYContext);
    const backButtonScaleWhenHold = useContext(
        Layout.BackButtonScaleWhenHoldContext
    );

    // Mods Button
    const modsButtonWidth = useContext(Layout.ModsButtonWidthContext);
    const modsButtonHeight = useContext(Layout.ModsButtonHeightContext);
    const modsButtonScale = useContext(Layout.ModsButtonScaleContext);
    const modsButtonX = useContext(Layout.ModsButtonXContext);
    const modsButtonY = useContext(Layout.ModsButtonYContext);

    // Options Button
    const optionsButtonWidth = useContext(Layout.OptionsButtonWidthContext);
    const optionsButtonHeight = useContext(Layout.OptionsButtonHeightContext);
    const optionsButtonScale = useContext(Layout.OptionsButtonScaleContext);
    const optionsButtonX = useContext(Layout.OptionsButtonXContext);
    const optionsButtonY = useContext(Layout.OptionsButtonYContext);

    // Random Button
    const randomButtonWidth = useContext(Layout.RandomButtonWidthContext);
    const randomButtonHeight = useContext(Layout.RandomButtonHeightContext);
    const randomButtonScale = useContext(Layout.RandomButtonScaleContext);
    const randomButtonX = useContext(Layout.RandomButtonXContext);
    const randomButtonY = useContext(Layout.RandomButtonYContext);

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
        sliderBallFlip.reset();
        sliderHintEnable.reset();
        sliderHintAlpha.reset();
        sliderHintColor.reset();
        sliderHintWidth.reset();
        sliderHintShowMinLength.reset();

        // Cursor
        rotateCursor.reset();
        rotateCursorTrail.reset();

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
        comboOverlap.reset();
        scorePrefix.reset();
        hitCirclePrefix.reset();
        hitCircleOverlap.reset();

        // HUD
        hudData.reset();

        // Theme
        accentColor.reset();

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

        alert("All configurations have been reset successfully!");
    };

    return (
        <Group title="Reset Configurations">
            <div className="block">
                <p>
                    This will reset all configurations to their default state.
                </p>
                <button className="button" type="button" onClick={onClick}>
                    Reset
                </button>
            </div>
        </Group>
    );
}
