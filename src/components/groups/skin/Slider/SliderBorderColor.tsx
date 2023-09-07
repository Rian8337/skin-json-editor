import { useContext } from "react";
import { SliderBorderColorContext } from "../../../../hooks/Slider/SliderBorderColorContext";
import ColorEditor from "../../../editors/ColorEditor";

export default function SliderBorderColor() {
    const ctx = useContext(SliderBorderColorContext);

    return <ColorEditor title="Color" resettable={ctx} />;
}
