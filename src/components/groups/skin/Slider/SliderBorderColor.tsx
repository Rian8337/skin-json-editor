import { useContext } from "react";
import { SliderBorderColorContext } from "@hooks/Slider";
import { SingleColorEditor } from "@components/editors";

export default function SliderBorderColor() {
    const ctx = useContext(SliderBorderColorContext);

    return <SingleColorEditor title="Color" resettable={ctx} />;
}
