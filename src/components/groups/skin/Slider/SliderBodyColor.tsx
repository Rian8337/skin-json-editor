import { useContext } from "react";
import { SliderBodyColorContext } from "@hooks/Slider/SliderBodyColorContext";
import SingleColorEditor from "@components/editors/SingleColorEditor";

export default function SliderBodyColor() {
    const ctx = useContext(SliderBodyColorContext);

    return <SingleColorEditor title="Color" resettable={ctx} />;
}
