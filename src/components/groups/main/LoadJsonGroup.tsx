import { FormEvent, useContext } from "react";
import Group from "../Group";
import "./LoadJsonGroup.css";
import * as Color from "@hooks/Color";
import * as ComboColor from "@hooks/ComboColor";
import * as Cursor from "@hooks/Cursor";
import * as Fonts from "@hooks/Fonts";
import * as Layout from "@hooks/Layout";
import * as Slider from "@hooks/Slider";
import * as Utils from "@hooks/Utils";
import { SkinJson } from "@structures/skin/SkinJson";

export default function LoadJsonGroup() {
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

    // Difficulty Switcher Button
    const difficultySwitcherWidth = useContext(
        Layout.DifficultySwitcherWidthContext
    );
    const difficultySwitcherHeight = useContext(
        Layout.DifficultySwitcherHeightContext
    );
    const difficultySwitcherScale = useContext(
        Layout.DifficultySwitcherScaleContext
    );
    const difficultySwitcherX = useContext(Layout.DifficultySwitcherXContext);
    const difficultySwitcherY = useContext(Layout.DifficultySwitcherYContext);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const file = (
            (event.target as HTMLFormElement).elements[0] as HTMLInputElement
        ).files?.[0];

        if (!file) {
            return;
        }

        file.text()
            .then((text) => {
                let json: SkinJson;

                try {
                    json = JSON.parse(text) as SkinJson;
                } catch {
                    alert(
                        "Encountered an error when attempting to process your skin.json file."
                    );

                    return;
                }

                // ComboColor
                forceOverride.loadFromJSON(json);
                comboColors.loadFromJSON(json);

                // Slider
                sliderBodyWidth.loadFromJSON(json);
                sliderBorderWidth.loadFromJSON(json);
                sliderBodyBaseAlpha.loadFromJSON(json);
                sliderFollowComboColor.loadFromJSON(json);
                sliderBodyColor.loadFromJSON(json);
                sliderBorderColor.loadFromJSON(json);
                sliderBallFlip.loadFromJSON(json);
                sliderHintEnable.loadFromJSON(json);
                sliderHintAlpha.loadFromJSON(json);
                sliderHintColor.loadFromJSON(json);
                sliderHintWidth.loadFromJSON(json);
                sliderHintShowMinLength.loadFromJSON(json);

                // Cursor
                rotateCursor.loadFromJSON(json);

                // Utilities
                limitComboTextLength.loadFromJSON(json);
                disableKiai.loadFromJSON(json);
                comboTextScale.loadFromJSON(json);
                animationFramerate.loadFromJSON(json);
                layeredHitSounds.loadFromJSON(json);
                spinnerFrequencyModulate.loadFromJSON(json);

                // Color
                menuItemDefaultColor.loadFromJSON(json);
                menuItemOnTouchColor.loadFromJSON(json);
                menuItemVersionsDefaultColor.loadFromJSON(json);
                menuItemVersionsSelectedColor.loadFromJSON(json);
                menuItemDefaultTextColor.loadFromJSON(json);
                menuItemSelectedTextColor.loadFromJSON(json);

                // Fonts
                comboPrefix.loadFromJSON(json);
                comboOverlap.loadFromJSON(json);
                scorePrefix.loadFromJSON(json);
                hitCirclePrefix.loadFromJSON(json);
                hitCircleOverlap.loadFromJSON(json);

                // Layout
                // Back Button
                backButtonWidth.loadFromJSON(json);
                backButtonHeight.loadFromJSON(json);
                backButtonScale.loadFromJSON(json);
                backButtonX.loadFromJSON(json);
                backButtonY.loadFromJSON(json);
                backButtonScaleWhenHold.loadFromJSON(json);

                // Mods Button
                modsButtonWidth.loadFromJSON(json);
                modsButtonHeight.loadFromJSON(json);
                modsButtonScale.loadFromJSON(json);
                modsButtonX.loadFromJSON(json);
                modsButtonY.loadFromJSON(json);

                // Options Button
                optionsButtonWidth.loadFromJSON(json);
                optionsButtonHeight.loadFromJSON(json);
                optionsButtonScale.loadFromJSON(json);
                optionsButtonX.loadFromJSON(json);
                optionsButtonY.loadFromJSON(json);

                // Random Button
                randomButtonWidth.loadFromJSON(json);
                randomButtonHeight.loadFromJSON(json);
                randomButtonScale.loadFromJSON(json);
                randomButtonX.loadFromJSON(json);
                randomButtonY.loadFromJSON(json);

                // Difficulty Switcher Button
                difficultySwitcherWidth.loadFromJSON(json);
                difficultySwitcherHeight.loadFromJSON(json);
                difficultySwitcherScale.loadFromJSON(json);
                difficultySwitcherX.loadFromJSON(json);
                difficultySwitcherY.loadFromJSON(json);

                alert("The skin.json file has been loaded successfully!");
            })
            .catch(() => {
                alert(
                    "Encountered an error when attempting to process your skin.json file."
                );
            });
    };

    return (
        <Group title="Load existing skin.json">
            <form
                className="load-json-form"
                onSubmit={onSubmit}
                encType="multipart/form-data"
            >
                <input type="file" accept=".json" name="jsonFile" />
                <br />
                <input
                    className="load-json-form-submit"
                    type="submit"
                    value="Load"
                />
            </form>
        </Group>
    );
}
