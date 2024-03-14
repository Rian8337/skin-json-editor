import Group from "../../Group";
import SubGroup from "../../SubGroup";
import ComboNumberIllustrationCanvas from "../../illustration/combonumber/ComboNumberIllustrationCanvas";
import ComboNumberIllustrationCircleSize from "../../illustration/combonumber/ComboNumberIllustrationCircleSize";
import ComboNumberIllustrationNumbers from "../../illustration/combonumber/ComboNumberIllustrationNumbers";
import HitCircleOverlap from "../Fonts/HitCircleOverlap";
import ComboTextScale from "./ComboTextScale";
import DisableKiai from "./DisableKiai";
import LimitComboTextLength from "./LimitComboTextLength";

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
                <HitCircleOverlap />
            </SubGroup>
        </Group>
    );
}
