import { useContext } from "react";
import { HitCircleOverlapContext } from "@hooks/Fonts";
import { UserInputEditor } from "@components/editors";

export default function HitCircleOverlap() {
    const ctx = useContext(HitCircleOverlapContext);

    return (
        <UserInputEditor
            title="Hit Circle Number Overlap"
            description="The amount of pixels that hit circle numbers overlap."
            resettable={ctx}
        />
    );
}
