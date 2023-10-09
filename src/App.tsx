import ComboColorGroup from "./components/groups/skin/ComboColor/ComboColorGroup";
import HeaderGroup from "./components/groups/main/HeaderGroup";
import SliderGroup from "./components/groups/skin/Slider/SliderGroup";
import UtilsGroup from "./components/groups/skin/Utils/UtilsGroup";
import ColorGroup from "./components/groups/skin/Color/ColorGroup";
import LayoutGroup from "./components/groups/skin/Layout/LayoutGroup";
import LoadJsonGroup from "./components/groups/main/LoadJsonGroup";
import FooterGroup from "./components/groups/main/FooterGroup";
import SaveJsonGroup from "./components/groups/main/SaveJsonGroup";
import ResetJsonGroup from "./components/groups/main/ResetJsonGroup";
import FontsGroup from "./components/groups/skin/Fonts/FontsGroup";

export default function App() {
    return (
        <>
            <HeaderGroup />
            <LoadJsonGroup />
            <ResetJsonGroup />
            <ComboColorGroup />
            <SliderGroup />
            <UtilsGroup />
            <ColorGroup />
            <LayoutGroup />
            <FontsGroup />
            <SaveJsonGroup />
            <FooterGroup />
        </>
    );
}
