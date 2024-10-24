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

                const {
                    ComboColor,
                    Slider,
                    Cursor,
                    Utils,
                    Color,
                    Fonts,
                    Layout,
                } = json;

                // ComboColor
                forceOverride.setValue(ComboColor?.forceOverride);
                //@ts-expect-error: existential generics are not supported
                comboColors.setValue(ComboColor?.colors);

                // Slider
                sliderBodyWidth.setValue(Slider?.sliderBodyWidth);
                sliderBorderWidth.setValue(Slider?.sliderBodyBaseAlpha);
                sliderBodyBaseAlpha.setValue(Slider?.sliderBodyBaseAlpha);
                sliderFollowComboColor.setValue(Slider?.sliderFollowComboColor);
                sliderBodyColor.setValue(Slider?.sliderBodyColor);
                sliderBorderColor.setValue(Slider?.sliderBorderColor);
                sliderBallFlip.setValue(Slider?.sliderBallFlip);
                sliderHintEnable.setValue(Slider?.sliderHintEnable);
                sliderHintAlpha.setValue(Slider?.sliderHintAlpha);
                sliderHintColor.setValue(Slider?.sliderHintColor);
                sliderHintWidth.setValue(Slider?.sliderHintWidth);
                sliderHintShowMinLength.setValue(
                    Slider?.sliderHintShowMinLength
                );

                // Cursor
                rotateCursor.setValue(Cursor?.rotateCursor);

                // Utilities
                limitComboTextLength.setValue(Utils?.limitComboTextLength);
                disableKiai.setValue(Utils?.limitComboTextLength);
                comboTextScale.setValue(Utils?.comboTextScale);
                animationFramerate.setValue(Utils?.animationFramerate);
                layeredHitSounds.setValue(Utils?.layeredHitSounds);
                spinnerFrequencyModulate.setValue(
                    Utils?.spinnerFrequencyModulate
                );

                // Color
                menuItemDefaultColor.setValue(Color?.MenuItemDefaultColor);
                menuItemOnTouchColor.setValue(Color?.MenuItemOnTouchColor);
                menuItemVersionsDefaultColor.setValue(
                    Color?.MenuItemVersionsDefaultColor
                );
                menuItemVersionsSelectedColor.setValue(
                    Color?.MenuItemVersionsSelectedColor
                );
                menuItemDefaultTextColor.setValue(
                    Color?.MenuItemDefaultTextColor
                );
                menuItemSelectedTextColor.setValue(
                    Color?.MenuItemSelectedTextColor
                );

                // Fonts
                comboPrefix.setValue(Fonts?.comboPrefix);
                scorePrefix.setValue(Fonts?.scorePrefix);
                hitCirclePrefix.setValue(Fonts?.hitCirclePrefix);
                hitCircleOverlap.setValue(Fonts?.hitCircleOverlap);

                // Layout
                // Back Button
                backButtonWidth.setValue(Layout?.BackButton?.w);
                backButtonHeight.setValue(Layout?.BackButton?.h);
                backButtonScale.setValue(Layout?.BackButton?.scale);
                backButtonX.setValue(Layout?.BackButton?.x);
                backButtonY.setValue(Layout?.BackButton?.y);
                backButtonScaleWhenHold.setValue(
                    Layout?.BackButton?.scaleWhenHold
                );

                // Mods Button
                modsButtonWidth.setValue(Layout?.ModsButton?.w);
                modsButtonHeight.setValue(Layout?.ModsButton?.h);
                modsButtonScale.setValue(Layout?.ModsButton?.scale);
                modsButtonX.setValue(Layout?.ModsButton?.x);
                modsButtonY.setValue(Layout?.ModsButton?.y);

                // Options Button
                optionsButtonWidth.setValue(Layout?.OptionsButton?.w);
                optionsButtonHeight.setValue(Layout?.OptionsButton?.h);
                optionsButtonScale.setValue(Layout?.OptionsButton?.scale);
                optionsButtonX.setValue(Layout?.OptionsButton?.x);
                optionsButtonY.setValue(Layout?.OptionsButton?.y);

                // Random Button
                randomButtonWidth.setValue(Layout?.RandomButton?.w);
                randomButtonHeight.setValue(Layout?.RandomButton?.h);
                randomButtonScale.setValue(Layout?.RandomButton?.scale);
                randomButtonX.setValue(Layout?.RandomButton?.x);
                randomButtonY.setValue(Layout?.RandomButton?.y);

                // Difficulty Switcher Button
                difficultySwitcherWidth.setValue(Layout?.DifficultySwitcher?.w);
                difficultySwitcherHeight.setValue(
                    Layout?.DifficultySwitcher?.h
                );
                difficultySwitcherScale.setValue(
                    Layout?.DifficultySwitcher?.scale
                );
                difficultySwitcherX.setValue(Layout?.DifficultySwitcher?.x);
                difficultySwitcherY.setValue(Layout?.DifficultySwitcher?.y);

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
