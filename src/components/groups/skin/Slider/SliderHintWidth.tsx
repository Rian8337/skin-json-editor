import { useContext } from "react";
import { SliderHintWidthContext } from "../../../../hooks/Slider/SliderHintWidthContext";
import UserInputEditor from "../../../editors/UserInputEditor";

export default function SliderHintWidth() {
    const ctx = useContext(SliderHintWidthContext);

    return <UserInputEditor title="Width" resettable={ctx} />;
}
