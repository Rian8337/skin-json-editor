import Group from "../../Group";
import SubGroup from "../../SubGroup";
import ComboPrefix from "./ComboPrefix";
import HitCircleOverlap from "./HitCircleOverlap";
import HitCirclePrefix from "./HitCirclePrefix";
import ScorePrefix from "./ScorePrefix";

export default function FontsGroup() {
    return (
        <Group title="Fonts" collapsible>
            <SubGroup title="Texture Prefixes">
                <div className="group-description">
                    These options define the prefix of skin texture files that
                    will be used by the game.
                    <br />
                    For example, putting prefix &quot;score&quot; on the combo
                    numbers option will make the game use &quot;score-0&quot;,
                    &quot;score-1&quot;, &quot;score-2&quot;, and so on.
                </div>
                <ComboPrefix />
                <ScorePrefix />
                <HitCirclePrefix />
            </SubGroup>
            <SubGroup title="Other Options">
                <HitCircleOverlap />
            </SubGroup>
        </Group>
    );
}
