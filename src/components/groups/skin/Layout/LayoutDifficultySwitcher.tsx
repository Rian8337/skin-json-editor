import { DifficultySwitcherHeightContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherHeightContext";
import { DifficultySwitcherScaleContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherScaleContext";
import { DifficultySwitcherWidthContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherWidthContext";
import { DifficultySwitcherXContext } from "@hooks/Layout/DifficultySwitcher/DifficultySwitcherXContext";
import { DifficultySwitcherYContext } from "@hooks/Layout/DifficultySwitcher/ModsButtonYContext";
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
