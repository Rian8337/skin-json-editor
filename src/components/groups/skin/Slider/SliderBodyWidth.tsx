import { useContext } from "react";
import { SliderBodyWidthContext } from "../../../../hooks/Slider/SliderBodyWidthContext";
import UserInputEditor from "../../../editors/UserInputEditor";

export default function SliderBodyWidth() {
    const ctx = useContext(SliderBodyWidthContext);

    return <UserInputEditor title="Width (osu!pixels)" resettable={ctx} />;
}
