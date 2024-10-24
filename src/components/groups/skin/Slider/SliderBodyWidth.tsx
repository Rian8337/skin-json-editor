import { useContext } from "react";
import { SliderBodyWidthContext } from "@hooks/Slider";
import { UserInputEditor } from "@components/editors";

export default function SliderBodyWidth() {
    const ctx = useContext(SliderBodyWidthContext);

    return <UserInputEditor title="Width (osu!pixels)" resettable={ctx} />;
}
