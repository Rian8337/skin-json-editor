import SubGroup from "@components/groups/SubGroup";
import SliderIllustrationCanvas from "./SliderIllustrationCanvas";
import SliderIllustrationCircleSize from "./SliderIllustrationCircleSize";
import SliderIllustrationComboColor from "./SliderIllustrationComboColor";

export default function SliderIllustrationGroup() {
    return (
        <SubGroup title="Illustration">
            <br />
            <SliderIllustrationCanvas />
            <SliderIllustrationCircleSize />
            <SliderIllustrationComboColor />
        </SubGroup>
    );
}
