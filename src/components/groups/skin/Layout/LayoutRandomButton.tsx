import { useContext } from "react";
import LayoutButtonEditors from "./LayoutButtonEditors";
import { RandomButtonWidthContext } from "../../../../hooks/Layout/RandomButton/RandomButtonWidthContext";
import { RandomButtonHeightContext } from "../../../../hooks/Layout/RandomButton/RandomButtonHeightContext";
import { RandomButtonScaleContext } from "../../../../hooks/Layout/RandomButton/RandomButtonScaleContext";
import { RandomButtonXContext } from "../../../../hooks/Layout/RandomButton/RandomButtonXContext";
import { RandomButtonYContext } from "../../../../hooks/Layout/RandomButton/RandomButtonYContext";

export default function LayoutRandomButton() {
    const width = useContext(RandomButtonWidthContext);
    const height = useContext(RandomButtonHeightContext);
    const scale = useContext(RandomButtonScaleContext);
    const x = useContext(RandomButtonXContext);
    const y = useContext(RandomButtonYContext);

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
