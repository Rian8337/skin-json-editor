import { useContext } from "react";
import Group from "../../Group";
import SliderBodyBaseAlpha from "./SliderBodyBaseAlpha";
import SliderBodyColor from "./SliderBodyColor";
import SliderBodyWidth from "./SliderBodyWidth";
import SliderBorderWidth from "./SliderBorderWidth";
import SliderFollowComboColor from "./SliderFollowComboColor";
import {
    SliderFollowComboColorContext,
    SliderHintEnableContext,
} from "@hooks/Slider";
import SliderBorderColor from "./SliderBorderColor";
import SliderHintEnable from "./SliderHintEnable";
import SliderHintAlpha from "./SliderHintAlpha";
import SliderHintColor from "./SliderHintColor";
import SliderHintWidth from "./SliderHintWidth";
import SliderHintShowMinLength from "./SliderHintShowMinLength";
import SubGroup from "../../SubGroup";
import SliderIllustrationGroup from "../../illustration/slider/SliderIllustrationGroup";
import SliderBallFlip from "./SliderBallFlip";
import EditorContainer from "@components/editors/EditorContainer";

export default function SliderGroup() {
    const followComboColor = useContext(SliderFollowComboColorContext);
    const sliderHintEnable = useContext(SliderHintEnableContext);

    return (
        <Group title="Slider" collapsible>
            <SliderIllustrationGroup />

            <SubGroup title="Body">
                <EditorContainer>
                    <SliderBodyWidth />
                    <SliderBodyBaseAlpha />
                </EditorContainer>

                <SliderFollowComboColor />
                {!followComboColor.value ? <SliderBodyColor /> : null}
            </SubGroup>

            <SubGroup title="Border" withEditorContainer>
                <SliderBorderWidth />
                <SliderBorderColor />
            </SubGroup>

            <SubGroup title="Ball">
                <SliderBallFlip />
            </SubGroup>

            <SubGroup title="Hint">
                <SliderHintEnable />
                {sliderHintEnable.value ? (
                    <EditorContainer>
                        <SliderHintAlpha />
                        <SliderHintColor />
                        <SliderHintWidth />
                        <SliderHintShowMinLength />
                    </EditorContainer>
                ) : null}
            </SubGroup>
        </Group>
    );
}
