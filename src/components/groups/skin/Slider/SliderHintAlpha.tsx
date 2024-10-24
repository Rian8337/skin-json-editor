import { useContext } from "react";
import { SliderHintAlphaContext } from "@hooks/Slider";
import SliderInputEditor from "@components/editors/SliderInputEditor";

export default function SliderHintAlpha() {
    const ctx = useContext(SliderHintAlphaContext);

    return (
        <SliderInputEditor
            title="Transparency"
            description="0 means the hint is fully invisible, while 1 means the hint is fully opaque."
            resettable={ctx}
        />
    );
}
