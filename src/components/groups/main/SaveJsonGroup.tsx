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
import "./SaveJsonGroup.css";
import { SkinJson } from "@structures/skin/SkinJson";
import { ComboPrefixContext } from "@hooks/Fonts/ComboPrefixContext";
import { HitCircleOverlapContext } from "@hooks/Fonts/HItCircleOverlapContext";
import { HitCirclePrefixContext } from "@hooks/Fonts/HitCirclePrefixContext";
import { ScorePrefixContext } from "@hooks/Fonts/ScorePrefixContext";
import { RotateCursorContext } from "@hooks/Cursor/RotateCursorContext";
import { DifficultySwitcherHeightContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherHeightContext";
import { DifficultySwitcherScaleContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherScaleContext";
import { DifficultySwitcherWidthContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherWidthContext";
import { DifficultySwitcherXContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherXContext";
import { DifficultySwitcherYContext } from "@hooks/Layout/DifficultySwitcher/ModsButtonYContext";
import { AnimationFrameContext } from "@hooks/Utils/AnimationFramerateContext";

export default function SaveJsonGroup() {
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
    // Back button
    const backButtonWidth = useContext(BackButtonWidthContext);
    const backButtonHeight = useContext(BackButtonHeightContext);
    const backButtonScale = useContext(BackButtonScaleContext);
    const backButtonX = useContext(BackButtonXContext);
    const backButtonY = useContext(BackButtonYContext);
    const backButtonScaleWhenHold = useContext(BackButtonScaleWhenHoldContext);

    // Mods button
    const modsButtonWidth = useContext(ModsButtonWidthContext);
    const modsButtonHeight = useContext(ModsButtonHeightContext);
    const modsButtonScale = useContext(ModsButtonScaleContext);
    const modsButtonX = useContext(ModsButtonXContext);
    const modsButtonY = useContext(ModsButtonYContext);

    // Options button
    const optionsButtonWidth = useContext(OptionsButtonWidthContext);
    const optionsButtonHeight = useContext(OptionsButtonHeightContext);
    const optionsButtonScale = useContext(OptionsButtonScaleContext);
    const optionsButtonX = useContext(OptionsButtonXContext);
    const optionsButtonY = useContext(OptionsButtonYContext);

    // Random button
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

            // Color
            menuItemDefaultColor.saveToJSON(json);
            menuItemOnTouchColor.saveToJSON(json);
            menuItemVersionsDefaultColor.saveToJSON(json);
            menuItemVersionsSelectedColor.saveToJSON(json);
            menuItemDefaultTextColor.saveToJSON(json);
            menuItemSelectedTextColor.saveToJSON(json);

            // Fonts
            comboPrefix.saveToJSON(json);
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

            // Difficulty switcher button
            difficultySwitcherWidth.saveToJSON(json);
            difficultySwitcherHeight.saveToJSON(json);
            difficultySwitcherScale.saveToJSON(json);
            difficultySwitcherX.saveToJSON(json);
            difficultySwitcherY.saveToJSON(json);
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
