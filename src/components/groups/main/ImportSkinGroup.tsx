import { FormEvent, useContext } from "react";
import Group from "../Group";
import "./ImportSkinGroup.css";
import * as Color from "@hooks/Color";
import * as ComboColor from "@hooks/ComboColor";
import * as Cursor from "@hooks/Cursor";
import * as Fonts from "@hooks/Fonts";
import * as Layout from "@hooks/Layout";
import * as Slider from "@hooks/Slider";
import * as Utils from "@hooks/Utils";
import { SkinJson } from "@structures/skin/SkinJson";
import SubGroup from "../SubGroup";
import { SkinIni } from "@structures/skin/SkinIni";

export default function ImportSkinGroup() {
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
    const scoreOverlap = useContext(Fonts.ScoreOverlapContext);
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

    const onJsonSubmit = (event: FormEvent<HTMLFormElement>) => {
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

                const resetAll = confirm(
                    "Would you like to reset all values before loading the skin.json file?"
                );

                // ComboColor
                forceOverride.loadFromJSON(json, resetAll);
                comboColors.loadFromJSON(json, resetAll);

                // Slider
                sliderBodyWidth.loadFromJSON(json, resetAll);
                sliderBorderWidth.loadFromJSON(json, resetAll);
                sliderBodyBaseAlpha.loadFromJSON(json, resetAll);
                sliderFollowComboColor.loadFromJSON(json, resetAll);
                sliderBodyColor.loadFromJSON(json, resetAll);
                sliderBorderColor.loadFromJSON(json, resetAll);
                sliderBallFlip.loadFromJSON(json, resetAll);
                sliderHintEnable.loadFromJSON(json, resetAll);
                sliderHintAlpha.loadFromJSON(json, resetAll);
                sliderHintColor.loadFromJSON(json, resetAll);
                sliderHintWidth.loadFromJSON(json, resetAll);
                sliderHintShowMinLength.loadFromJSON(json, resetAll);

                // Cursor
                rotateCursor.loadFromJSON(json, resetAll);
                rotateCursorTrail.loadFromJSON(json, resetAll);

                // Utilities
                limitComboTextLength.loadFromJSON(json, resetAll);
                disableKiai.loadFromJSON(json, resetAll);
                comboTextScale.loadFromJSON(json, resetAll);
                animationFramerate.loadFromJSON(json, resetAll);
                layeredHitSounds.loadFromJSON(json, resetAll);
                spinnerFrequencyModulate.loadFromJSON(json, resetAll);

                // Color
                menuItemDefaultColor.loadFromJSON(json, resetAll);
                menuItemOnTouchColor.loadFromJSON(json, resetAll);
                menuItemVersionsDefaultColor.loadFromJSON(json, resetAll);
                menuItemVersionsSelectedColor.loadFromJSON(json, resetAll);
                menuItemDefaultTextColor.loadFromJSON(json, resetAll);
                menuItemSelectedTextColor.loadFromJSON(json, resetAll);

                // Fonts
                comboPrefix.loadFromJSON(json, resetAll);
                comboOverlap.loadFromJSON(json, resetAll);
                scorePrefix.loadFromJSON(json, resetAll);
                scoreOverlap.loadFromJSON(json, resetAll);
                hitCirclePrefix.loadFromJSON(json, resetAll);
                hitCircleOverlap.loadFromJSON(json, resetAll);

                // Layout
                // Back Button
                backButtonWidth.loadFromJSON(json, resetAll);
                backButtonHeight.loadFromJSON(json, resetAll);
                backButtonScale.loadFromJSON(json, resetAll);
                backButtonX.loadFromJSON(json, resetAll);
                backButtonY.loadFromJSON(json, resetAll);
                backButtonScaleWhenHold.loadFromJSON(json, resetAll);

                // Mods Button
                modsButtonWidth.loadFromJSON(json, resetAll);
                modsButtonHeight.loadFromJSON(json, resetAll);
                modsButtonScale.loadFromJSON(json, resetAll);
                modsButtonX.loadFromJSON(json, resetAll);
                modsButtonY.loadFromJSON(json, resetAll);

                // Options Button
                optionsButtonWidth.loadFromJSON(json, resetAll);
                optionsButtonHeight.loadFromJSON(json, resetAll);
                optionsButtonScale.loadFromJSON(json, resetAll);
                optionsButtonX.loadFromJSON(json, resetAll);
                optionsButtonY.loadFromJSON(json, resetAll);

                // Random Button
                randomButtonWidth.loadFromJSON(json, resetAll);
                randomButtonHeight.loadFromJSON(json, resetAll);
                randomButtonScale.loadFromJSON(json, resetAll);
                randomButtonX.loadFromJSON(json, resetAll);
                randomButtonY.loadFromJSON(json, resetAll);

                alert("The skin.json file has been loaded successfully!");
            })
            .catch(() => {
                alert(
                    "Encountered an error when attempting to process your skin.json file."
                );
            });
    };

    const onIniSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const file = (
            (event.target as HTMLFormElement).elements[0] as HTMLInputElement
        ).files?.[0];

        if (!file) {
            return;
        }

        file.text()
            .then((text) => {
                const resetAll = confirm(
                    "Would you like to reset all values before loading the skin.json file?"
                );

                const ini = new SkinIni(text);

                // Cursor
                rotateCursor.loadFromIni(ini, resetAll);

                // ComboColor
                comboColors.loadFromIni(ini, resetAll);

                // Slider
                sliderHintColor.loadFromIni(ini, resetAll);
                sliderHintAlpha.loadFromIni(ini, resetAll);
                sliderHintWidth.loadFromIni(ini, resetAll);
                sliderHintEnable.loadFromIni(ini, resetAll);
                sliderHintShowMinLength.loadFromIni(ini, resetAll);
                sliderBodyColor.loadFromIni(ini, resetAll);
                sliderBodyBaseAlpha.loadFromIni(ini, resetAll);
                sliderFollowComboColor.loadFromIni(ini, resetAll);
                sliderBorderColor.loadFromIni(ini, resetAll);

                // Color
                menuItemDefaultTextColor.loadFromIni(ini, resetAll);
                menuItemSelectedTextColor.loadFromIni(ini, resetAll);
                menuItemDefaultColor.loadFromIni(ini, resetAll);

                // Fonts
                hitCirclePrefix.loadFromIni(ini, resetAll);
                hitCircleOverlap.loadFromIni(ini, resetAll);
                scorePrefix.loadFromIni(ini, resetAll);
                scoreOverlap.loadFromIni(ini, resetAll);
                comboPrefix.loadFromIni(ini, resetAll);
                comboOverlap.loadFromIni(ini, resetAll);

                // Utils
                comboTextScale.loadFromIni(ini, resetAll);
                animationFramerate.loadFromIni(ini, resetAll);
                layeredHitSounds.loadFromIni(ini, resetAll);
                sliderBallFlip.loadFromIni(ini, resetAll);
                spinnerFrequencyModulate.loadFromIni(ini, resetAll);

                // Layout
                backButtonScaleWhenHold.loadFromIni(ini, resetAll);
                modsButtonY.loadFromIni(ini, resetAll);
                optionsButtonY.loadFromIni(ini, resetAll);
                randomButtonY.loadFromIni(ini, resetAll);

                alert("The skin.ini file has been loaded successfully!");
            })
            .catch(() => {
                alert(
                    "Encountered an error when attempting to process your skin.ini file."
                );
            });
    };

    return (
        <Group title="Load Existing Configuration">
            <SubGroup title="skin.json">
                <form
                    className="import-skin-form"
                    onSubmit={onJsonSubmit}
                    encType="multipart/form-data"
                >
                    <input type="file" accept=".json" name="jsonFile" />
                    <br />
                    <input
                        className="import-skin-form-submit"
                        type="submit"
                        value="Load"
                    />
                </form>
            </SubGroup>

            <SubGroup title="skin.ini">
                <form
                    className="import-skin-form"
                    onSubmit={onIniSubmit}
                    encType="multipart/form-data"
                >
                    <input type="file" accept=".ini" name="iniFile" />
                    <br />
                    <input
                        className="import-skin-form-submit"
                        type="submit"
                        value="Load"
                    />
                </form>
            </SubGroup>
        </Group>
    );
}
