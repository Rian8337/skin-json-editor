import { useContext } from "react";
import LayoutButtonEditors from "./LayoutButtonEditors";
import {
    RandomButtonWidthContext,
    RandomButtonHeightContext,
    RandomButtonScaleContext,
    RandomButtonXContext,
    RandomButtonYContext,
} from "@hooks/Layout";

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
