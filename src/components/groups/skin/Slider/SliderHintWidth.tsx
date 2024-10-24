import { useContext } from "react";
import { SliderHintWidthContext } from "@hooks/Slider";
import { UserInputEditor } from "@components/editors";

export default function SliderHintWidth() {
    const ctx = useContext(SliderHintWidthContext);

    return <UserInputEditor title="Width" resettable={ctx} />;
}
