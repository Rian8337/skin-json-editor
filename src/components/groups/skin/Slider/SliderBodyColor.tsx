import { useContext } from "react";
import { SliderBodyColorContext } from "../../../../hooks/Slider/SliderBodyColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function SliderBodyColor() {
    const ctx = useContext(SliderBodyColorContext);

    return <ColorEditor title="Color" resettable={ctx} />;
}
