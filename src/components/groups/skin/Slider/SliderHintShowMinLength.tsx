import { useContext } from "react";
import { SliderHintShowMinLengthContext } from "../../../../hooks/Slider/SliderHintShowMinLengthContext";
import UserInputEditor from "../../../editors/UserInputEditor";

export default function SliderHintShowMinLength() {
    const ctx = useContext(SliderHintShowMinLengthContext);

    return (
        <UserInputEditor
            title="Minimum Length (osu!pixels)"
            description="When a slider reaches this length, its hint will be displayed."
            resettable={ctx}
        />
    );
}
