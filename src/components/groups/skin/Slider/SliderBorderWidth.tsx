import { useContext } from "react";
import UserInputEditor from "../../../editors/UserInputEditor";
import { SliderBorderWidthContext } from "../../../../hooks/Slider/SliderBorderWidthContext";

export default function SliderBorderWidth() {
    const ctx = useContext(SliderBorderWidthContext);

    return <UserInputEditor title="Width (osu!pixels)" resettable={ctx} />;
}
