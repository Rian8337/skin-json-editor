import { useContext } from "react";
import { SliderBodyColorContext } from "@hooks/Slider";
import { SingleColorEditor } from "@components/editors";

export default function SliderBodyColor() {
    const ctx = useContext(SliderBodyColorContext);

    return <SingleColorEditor title="Color" resettable={ctx} />;
}
