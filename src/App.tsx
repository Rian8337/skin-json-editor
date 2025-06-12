import "bulma/css/bulma.min.css";
import ComboColorGroup from "./components/groups/skin/ComboColor/ComboColorGroup";
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
import HeaderGroup from "@components/groups/main/HeaderGroup.tsx";
import ThemeGroup from "@components/groups/skin/Theme/ThemeGroup";

export default function App() {
    return (
        <>
            <HeaderGroup />

            <main className="section">
                <div className="container">
                    <ImportSkinGroup />
                    <ResetJsonGroup />
                    <ComboColorGroup />
                    <SliderGroup />
                    <CursorGroup />
                    <UtilsGroup />
                    <ColorGroup />
                    <LayoutGroup />
                    <FontsGroup />
                    <ThemeGroup />
                    <SaveJsonGroup />
                </div>
            </main>

            <FooterGroup />
        </>
    );
}
