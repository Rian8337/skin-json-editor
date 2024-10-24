import { useContext } from "react";
import {
    ModsButtonWidthContext,
    ModsButtonHeightContext,
    ModsButtonScaleContext,
    ModsButtonXContext,
    ModsButtonYContext,
} from "@hooks/Layout";
import LayoutButtonEditors from "./LayoutButtonEditors";

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
