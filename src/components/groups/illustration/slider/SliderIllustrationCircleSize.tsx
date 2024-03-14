import { useContext } from "react";
import { SliderIllustrationCircleSizeContext } from "../../../../hooks/Illustration/SliderIllustrationCircleSizeContext";
import SliderInputEditor from "../../../editors/SliderInputEditor";

export default function SliderIllustrationCircleSize() {
    const ctx = useContext(SliderIllustrationCircleSizeContext);

    return (
        <SliderInputEditor
            title="Circle Size"
            description="The size of the circle in the illustration."
            resettable={ctx}
        />
    );
}
