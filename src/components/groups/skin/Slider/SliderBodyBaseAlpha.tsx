import { useContext } from "react";
import { SliderBodyBaseAlphaContext } from "@hooks/Slider";
import { SliderInputEditor } from "@components/editors";

export default function SliderBodyBaseAlpha() {
    const ctx = useContext(SliderBodyBaseAlphaContext);

    return (
        <SliderInputEditor
            title="Transparency"
            description="0 means the body is fully invisible, while 1 means the body is fully opaque."
            resettable={ctx}
        />
    );
}
