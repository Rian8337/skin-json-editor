import { UserInputEditor } from "@components/editors";
import { ComboOverlapContext } from "@hooks/Fonts";
import { useContext } from "react";

export default function ComboOverlap() {
    const ctx = useContext(ComboOverlapContext);

    return (
        <UserInputEditor
            title="Combo Number Overlap"
            description="The amount of pixels that combo numbers overlap."
            resettable={ctx}
        />
    );
}
