import {
    DifficultySwitcherHeightContext,
    DifficultySwitcherScaleContext,
    DifficultySwitcherWidthContext,
    DifficultySwitcherXContext,
    DifficultySwitcherYContext,
} from "@hooks/Layout";
import { useContext } from "react";
import LayoutButtonEditors from "./LayoutButtonEditors";

export default function LayoutDifficultySwitcher() {
    const width = useContext(DifficultySwitcherWidthContext);
    const height = useContext(DifficultySwitcherHeightContext);
    const scale = useContext(DifficultySwitcherScaleContext);
    const x = useContext(DifficultySwitcherXContext);
    const y = useContext(DifficultySwitcherYContext);

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
