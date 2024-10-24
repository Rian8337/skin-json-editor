import { useContext } from "react";
import { SliderIllustrationCircleSizeContext } from "@hooks/Illustration";
import { SliderInputEditor } from "@components/editors";

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
