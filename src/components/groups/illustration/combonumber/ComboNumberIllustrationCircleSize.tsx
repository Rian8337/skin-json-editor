import { useContext } from "react";
import { ComboNumberIllustrationCircleSizeContext } from "@hooks/Illustration";
import { SliderInputEditor } from "@components/editors";

export default function ComboNumberIllustrationCircleSize() {
    const ctx = useContext(ComboNumberIllustrationCircleSizeContext);

    return (
        <SliderInputEditor
            title="Circle Size"
            description="The size of the circle in the illustration."
            resettable={ctx}
        />
    );
}
