import EditorContainer from "@components/editors/EditorContainer";
import Group from "../../Group";
import SubGroup from "../../SubGroup";
import ComboOverlap from "./ComboOverlap";
import ComboPrefix from "./ComboPrefix";
import HitCircleOverlap from "./HitCircleOverlap";
import HitCirclePrefix from "./HitCirclePrefix";
import ScoreOverlap from "./ScoreOverlap";
import ScorePrefix from "./ScorePrefix";

export default function FontsGroup() {
    return (
        <Group title="Fonts" collapsible>
            <SubGroup title="Texture Prefixes">
                <p className="pb-2">
                    These options define the prefix of skin texture files that
                    will be used by the game.
                    <br />
                    For example, putting prefix <code>score</code> on the combo
                    numbers option will make the game use <code>score-0</code>,{" "}
                    <code>score-1</code>, <code>score-2</code>, and so on.
                </p>

                <EditorContainer>
                    <ComboPrefix />
                    <ScorePrefix />
                    <HitCirclePrefix />
                </EditorContainer>
            </SubGroup>

            <SubGroup title="Texture Overlaps">
                <p className="pb-2">
                    These options define the amount of pixels that textures will
                    overlap.
                    <br />
                    Negative numbers will add a gap between textures.
                </p>

                <EditorContainer>
                    <ComboOverlap />
                    <ScoreOverlap />
                    <HitCircleOverlap />
                </EditorContainer>
            </SubGroup>
        </Group>
    );
}
