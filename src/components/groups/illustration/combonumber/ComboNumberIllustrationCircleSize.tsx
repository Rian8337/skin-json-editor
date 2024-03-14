import { useContext } from "react";
import { ComboNumberIllustrationCircleSizeContext } from "../../../../hooks/Illustration/ComboNumberIllustrationCircleSizeContext";
import SliderInputEditor from "../../../editors/SliderInputEditor";

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
