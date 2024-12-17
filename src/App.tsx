import ComboColorGroup from "./components/groups/skin/ComboColor/ComboColorGroup";
import HeaderGroup from "./components/groups/main/HeaderGroup";
import SliderGroup from "./components/groups/skin/Slider/SliderGroup";
import UtilsGroup from "./components/groups/skin/Utils/UtilsGroup";
import ColorGroup from "./components/groups/skin/Color/ColorGroup";
import LayoutGroup from "./components/groups/skin/Layout/LayoutGroup";
import ImportSkinGroup from "./components/groups/main/ImportSkinGroup";
import FooterGroup from "./components/groups/main/FooterGroup";
import SaveJsonGroup from "./components/groups/main/SaveJsonGroup";
import ResetJsonGroup from "./components/groups/main/ResetConfigGroup";
import FontsGroup from "./components/groups/skin/Fonts/FontsGroup";
import CursorGroup from "@components/groups/skin/Cursor/CursorGroup";

export default function App() {
    return (
        <>
            <HeaderGroup />
            <ImportSkinGroup />
            <ResetJsonGroup />
            <ComboColorGroup />
            <SliderGroup />
            <CursorGroup />
            <UtilsGroup />
            <ColorGroup />
            <LayoutGroup />
            <FontsGroup />
            <SaveJsonGroup />
            <FooterGroup />
        </>
    );
}
