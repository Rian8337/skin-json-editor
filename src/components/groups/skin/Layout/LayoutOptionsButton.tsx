import { useContext } from "react";
import { OptionsButtonWidthContext } from "@hooks/Layout/OptionsButton/OptionsButtonWidthContext";
import { OptionsButtonHeightContext } from "@hooks/Layout/OptionsButton/OptionsButtonHeightContext";
import { OptionsButtonScaleContext } from "@hooks/Layout/OptionsButton/OptionsButtonScaleContext";
import LayoutButtonEditors from "./LayoutButtonEditors";
import { OptionsButtonXContext } from "@hooks/Layout/OptionsButton/OptionsButtonXContext";
import { OptionsButtonYContext } from "@hooks/Layout/OptionsButton/OptionsButtonYContext";

export default function LayoutOptionsButton() {
    const width = useContext(OptionsButtonWidthContext);
    const height = useContext(OptionsButtonHeightContext);
    const scale = useContext(OptionsButtonScaleContext);
    const x = useContext(OptionsButtonXContext);
    const y = useContext(OptionsButtonYContext);

    return (
        <LayoutButtonEditors
            width={width}
            height={height}
            scale={scale}
            x={x}
            y={y}
        />
    );
}
