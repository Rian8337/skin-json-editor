import { FormEvent, useContext } from "react";
import Group from "../Group";
import "./LoadJsonGroup.css";
import { ForceOverrideContext } from "@hooks/ComboColor/ForceOverrideContext";
import { SkinJson } from "@structures/skin/SkinJson";
import { ComboColorsContext } from "@hooks/ComboColor/ComboColorsContext";
import { SliderBodyWidthContext } from "@hooks/Slider/SliderBodyWidthContext";
import { SliderBorderWidthContext } from "@hooks/Slider/SliderBorderWidthContext";
import { SliderBodyBaseAlphaContext } from "@hooks/Slider/SliderBodyBaseAlphaContext";
import { SliderFollowComboColorContext } from "@hooks/Slider/SliderFollowComboColorContext";
import { SliderBodyColorContext } from "@hooks/Slider/SliderBodyColorContext";
import { SliderBorderColorContext } from "@hooks/Slider/SliderBorderColorContext";
import { SliderHintEnableContext } from "@hooks/Slider/SliderHintEnableContext";
import { SliderHintAlphaContext } from "@hooks/Slider/SliderHintAlphaContext";
import { SliderHintColorContext } from "@hooks/Slider/SliderHintColorContext";
import { SliderHintWidthContext } from "@hooks/Slider/SliderHintWidthContext";
import { SliderHintShowMinLengthContext } from "@hooks/Slider/SliderHintShowMinLengthContext";
import { LimitComboTextLengthContext } from "@hooks/Utils/LimitComboTextLengthContext";
import { DisableKiaiContext } from "@hooks/Utils/DisableKiaiContext";
import { ComboTextScaleContext } from "@hooks/Utils/ComboTextScaleContext";
import { MenuItemDefaultColorContext } from "@hooks/Color/MenuItemDefaultColorContext";
import { MenuItemOnTouchColorContext } from "@hooks/Color/MenuItemOnTouchColorContext";
import { MenuItemVersionsDefaultColorContext } from "@hooks/Color/MenuItemVersionsDefaultColorContext";
import { MenuItemVersionsSelectedColorContext } from "@hooks/Color/MenuItemVersionsSelectedColorContext";
import { MenuItemDefaultTextColorContext } from "@hooks/Color/MenuItemDefaultTextColorContext";
import { MenuItemSelectedTextColorContext } from "@hooks/Color/MenuItemSelectedTextColorContext";
import { BackButtonWidthContext } from "@hooks/Layout/BackButton/BackButtonWidthContext";
import { BackButtonHeightContext } from "@hooks/Layout/BackButton/BackButtonHeightContext";
import { BackButtonScaleContext } from "@hooks/Layout/BackButton/BackButtonScaleContext";
import { BackButtonXContext } from "@hooks/Layout/BackButton/BackButtonXContext";
import { BackButtonYContext } from "@hooks/Layout/BackButton/BackButtonYContext";
import { BackButtonScaleWhenHoldContext } from "@hooks/Layout/BackButton/BackButtonScaleWhenHoldContext";
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
import { ComboPrefixContext } from "@hooks/Fonts/ComboPrefixContext";
import { HitCircleOverlapContext } from "@hooks/Fonts/HItCircleOverlapContext";
import { HitCirclePrefixContext } from "@hooks/Fonts/HitCirclePrefixContext";
import { ScorePrefixContext } from "@hooks/Fonts/ScorePrefixContext";
import { RotateCursorContext } from "@hooks/Cursor/RotateCursorContext";
import { DifficultySwitcherWidthContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherWidthContext";
import { DifficultySwitcherHeightContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherHeightContext";
import { DifficultySwitcherScaleContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherScaleContext";
import { DifficultySwitcherXContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherXContext";
import { DifficultySwitcherYContext } from "@hooks/Layout/DifficultySwitcher/ModsButtonYContext";

export default function LoadJsonGroup() {
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
                    json = JSON.parse(text) as unknown as SkinJson;
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
