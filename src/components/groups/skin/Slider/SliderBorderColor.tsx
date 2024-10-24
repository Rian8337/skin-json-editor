import { useContext } from "react";
import { SliderBorderColorContext } from "@hooks/Slider/SliderBorderColorContext";
import SingleColorEditor from "@components/editors/SingleColorEditor";

export default function SliderBorderColor() {
    const ctx = useContext(SliderBorderColorContext);

    return <SingleColorEditor title="Color" resettable={ctx} />;
}
