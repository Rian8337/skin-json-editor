import Group from "../../Group";
import SubGroup from "../../SubGroup";
import ComboNumberIllustrationCanvas from "../../illustration/combonumber/ComboNumberIllustrationCanvas";
import ComboNumberIllustrationCircleSize from "../../illustration/combonumber/ComboNumberIllustrationCircleSize";
import ComboNumberIllustrationNumbers from "../../illustration/combonumber/ComboNumberIllustrationNumbers";
import AnimationFramerate from "./AnimationFramerate";
import ComboTextScale from "./ComboTextScale";
import DisableKiai from "./DisableKiai";
import LayeredHitSounds from "./LayeredHitSounds";
import LimitComboTextLength from "./LimitComboTextLength";
import SpinnerFrequencyModulate from "./SpinnerFrequencyModulate";

export default function UtilsGroup() {
    return (
        <Group title="Utilities" collapsible>
            <DisableKiai />

            <SubGroup title="Combo Number">
                <ComboNumberIllustrationCanvas />
                <ComboNumberIllustrationCircleSize />
                <ComboNumberIllustrationNumbers />
                <hr />
                <LimitComboTextLength />
                <ComboTextScale />
                <AnimationFramerate />
                <LayeredHitSounds />
                <SpinnerFrequencyModulate />
            </SubGroup>
        </Group>
    );
}
