import { useContext } from "react";
import { SliderFollowComboColorContext } from "../../../hooks/Slider/SliderFollowComboColorContext";
import SubGroup from "../SubGroup";
import SliderIllustrationCanvas from "./SliderIllustrationCanvas";
import SliderIllustrationCircleSize from "./SliderIllustrationCircleSize";
import SliderIllustrationComboColor from "./SliderIllustrationComboColor";

export default function SliderIllustrationGroup() {
    const followComboColor = useContext(SliderFollowComboColorContext);

    return (
        <SubGroup title="Illustration">
            <br />
            <SliderIllustrationCanvas />

            <SliderIllustrationCircleSize />

            {!followComboColor.value ? <SliderIllustrationComboColor /> : null}
        </SubGroup>
    );
}
