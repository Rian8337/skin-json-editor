import { useContext } from "react";
import * as Color from "@hooks/Color";
import * as ComboColor from "@hooks/ComboColor";
import * as Cursor from "@hooks/Cursor";
import * as Fonts from "@hooks/Fonts";
import * as Layout from "@hooks/Layout";
import * as Slider from "@hooks/Slider";
import * as Utils from "@hooks/Utils";
import Group from "../Group";
import "./SaveJsonGroup.css";
import { SkinJson } from "@structures/skin/SkinJson";

export default function SaveJsonGroup() {
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

    // Utilities
    const limitComboTextLength = useContext(Utils.LimitComboTextLengthContext);
    const disableKiai = useContext(Utils.DisableKiaiContext);
    const comboTextScale = useContext(Utils.ComboTextScaleContext);
    const animationFramerate = useContext(Utils.AnimationFrameContext);
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
        const json: SkinJson = {};

        try {
            // ComboColor
            forceOverride.saveToJSON(json);
            comboColors.saveToJSON(json);

            // Slider
            sliderBodyWidth.saveToJSON(json);
            sliderBorderWidth.saveToJSON(json);
            sliderBodyBaseAlpha.saveToJSON(json);
            sliderFollowComboColor.saveToJSON(json);
            sliderBodyColor.saveToJSON(json);
            sliderBorderColor.saveToJSON(json);
            sliderBallFlip.saveToJSON(json);
            sliderHintEnable.saveToJSON(json);
            sliderHintAlpha.saveToJSON(json);
            sliderHintColor.saveToJSON(json);
            sliderHintWidth.saveToJSON(json);
            sliderHintShowMinLength.saveToJSON(json);

            // Cursor
            rotateCursor.saveToJSON(json);

            // Utilities
            limitComboTextLength.saveToJSON(json);
            disableKiai.saveToJSON(json);
            comboTextScale.saveToJSON(json);
            animationFramerate.saveToJSON(json);
            layeredHitSounds.saveToJSON(json);
            spinnerFrequencyModulate.saveToJSON(json);

            // Color
            menuItemDefaultColor.saveToJSON(json);
            menuItemOnTouchColor.saveToJSON(json);
            menuItemVersionsDefaultColor.saveToJSON(json);
            menuItemVersionsSelectedColor.saveToJSON(json);
            menuItemDefaultTextColor.saveToJSON(json);
            menuItemSelectedTextColor.saveToJSON(json);

            // Fonts
            comboPrefix.saveToJSON(json);
            comboOverlap.saveToJSON(json);
            scorePrefix.saveToJSON(json);
            hitCirclePrefix.saveToJSON(json);
            hitCircleOverlap.saveToJSON(json);

            // Layout
            // Back button
            backButtonWidth.saveToJSON(json);
            backButtonHeight.saveToJSON(json);
            backButtonScale.saveToJSON(json);
            backButtonX.saveToJSON(json);
            backButtonY.saveToJSON(json);
            backButtonScaleWhenHold.saveToJSON(json);

            // Mods button
            modsButtonWidth.saveToJSON(json);
            modsButtonHeight.saveToJSON(json);
            modsButtonScale.saveToJSON(json);
            modsButtonX.saveToJSON(json);
            modsButtonY.saveToJSON(json);

            // Options button
            optionsButtonWidth.saveToJSON(json);
            optionsButtonHeight.saveToJSON(json);
            optionsButtonScale.saveToJSON(json);
            optionsButtonX.saveToJSON(json);
            optionsButtonY.saveToJSON(json);

            // Random button
            randomButtonWidth.saveToJSON(json);
            randomButtonHeight.saveToJSON(json);
            randomButtonScale.saveToJSON(json);
            randomButtonX.saveToJSON(json);
            randomButtonY.saveToJSON(json);
        } catch (e) {
            alert((e as Error).message);

            return;
        }

        const blob = new Blob([JSON.stringify(json, null, "\t")], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);

        const dl = document.createElement("a");
        dl.setAttribute("href", url);
        dl.setAttribute("download", "skin.json");
        dl.setAttribute("target", "_blank");
        dl.click();

        URL.revokeObjectURL(url);
    };

    return (
        <Group title="Save skin.json">
            <div className="save-skin-json-container">
                <input
                    className="save-skin-json-input"
                    type="button"
                    value="Save"
                    onClick={onClick}
                />
            </div>
        </Group>
    );
}
