import { UserInputEditor } from "@components/editors";
import { ScoreOverlapContext } from "@hooks/Fonts";
import { useContext } from "react";

export default function ScoreOverlap() {
    const ctx = useContext(ScoreOverlapContext);

    return (
        <UserInputEditor
            title="Score Number Overlap"
            description="The amount of pixels that score numbers overlap."
            resettable={ctx}
        />
    );
}
