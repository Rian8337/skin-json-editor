import { useContext } from "react";
import { UserInputEditor } from "@components/editors";
import { SliderBorderWidthContext } from "@hooks/Slider";

export default function SliderBorderWidth() {
    const ctx = useContext(SliderBorderWidthContext);

    return <UserInputEditor title="Width (osu!pixels)" resettable={ctx} />;
}
