import SubGroup from "@components/groups/SubGroup";
import SliderIllustrationCanvas from "./SliderIllustrationCanvas";
import SliderIllustrationCircleSize from "./SliderIllustrationCircleSize";
import SliderIllustrationComboColor from "./SliderIllustrationComboColor";
import EditorContainer from "@components/editors/EditorContainer";

export default function SliderIllustrationGroup() {
    return (
        <SubGroup title="Illustration">
            <SliderIllustrationCanvas />
            <br />
            <EditorContainer>
                <SliderIllustrationCircleSize />
                <SliderIllustrationComboColor />
            </EditorContainer>
        </SubGroup>
    );
}
