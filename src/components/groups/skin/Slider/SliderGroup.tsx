import { useContext } from "react";
import Group from "../../Group";
import SliderBodyBaseAlpha from "./SliderBodyBaseAlpha";
import SliderBodyColor from "./SliderBodyColor";
import SliderBodyWidth from "./SliderBodyWidth";
import SliderBorderWidth from "./SliderBorderWidth";
import SliderFollowComboColor from "./SliderFollowComboColor";
import { SliderFollowComboColorContext } from "../../../../hooks/Slider/SliderFollowComboColorContext";
import SliderBorderColor from "./SliderBorderColor";
import SliderHintEnable from "./SliderHintEnable";
import { SliderHintEnableContext } from "../../../../hooks/Slider/SliderHintEnableContext";
import SliderHintAlpha from "./SliderHintAlpha";
import SliderHintColor from "./SliderHintColor";
import SliderHintWidth from "./SliderHintWidth";
import SliderHintShowMinLength from "./SliderHintShowMinLength";
import SubGroup from "../../SubGroup";

export default function SliderGroup() {
    const followComboColor = useContext(SliderFollowComboColorContext);
    const sliderHintEnable = useContext(SliderHintEnableContext);

    return (
        <Group title="Slider" collapsible={true}>
            <SubGroup title="Body">
                <SliderBodyWidth />
                <SliderBodyBaseAlpha />
                <SliderFollowComboColor />
                {!followComboColor.value ? <SliderBodyColor /> : null}
            </SubGroup>

            <SubGroup title="Border">
                <SliderBorderWidth />
                <SliderBorderColor />
            </SubGroup>

            <SubGroup title="Hint">
                <SliderHintEnable />
                {sliderHintEnable.value ? (
                    <>
                        <SliderHintAlpha />
                        <SliderHintColor />
                        <SliderHintWidth />
                        <SliderHintShowMinLength />
                    </>
                ) : null}
            </SubGroup>
        </Group>
    );
}
