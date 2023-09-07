import { useContext } from "react";
import { ModsButtonWidthContext } from "../../../../hooks/Layout/ModsButton/ModsButtonWidthContext";
import { ModsButtonHeightContext } from "../../../../hooks/Layout/ModsButton/ModsButtonHeightContext";
import { ModsButtonScaleContext } from "../../../../hooks/Layout/ModsButton/ModsButtonScaleContext";
import LayoutButtonEditors from "./LayoutButtonEditors";
import { ModsButtonXContext } from "../../../../hooks/Layout/ModsButton/ModsButtonXContext";
import { ModsButtonYContext } from "../../../../hooks/Layout/ModsButton/ModsButtonYContext";

export default function LayoutModsButton() {
    const width = useContext(ModsButtonWidthContext);
    const height = useContext(ModsButtonHeightContext);
    const scale = useContext(ModsButtonScaleContext);
    const x = useContext(ModsButtonXContext);
    const y = useContext(ModsButtonYContext);

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
