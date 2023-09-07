import { useContext } from "react";
import { SliderHintColorContext } from "../../../../hooks/Slider/SliderHintColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function SliderHintColor() {
    const ctx = useContext(SliderHintColorContext);

    return <ColorEditor title="Color" resettable={ctx} />;
}
