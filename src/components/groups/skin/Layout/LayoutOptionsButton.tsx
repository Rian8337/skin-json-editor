import { useContext } from "react";
import {
    OptionsButtonWidthContext,
    OptionsButtonHeightContext,
    OptionsButtonScaleContext,
    OptionsButtonXContext,
    OptionsButtonYContext,
} from "@hooks/Layout";
import LayoutButtonEditors from "./LayoutButtonEditors";

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
