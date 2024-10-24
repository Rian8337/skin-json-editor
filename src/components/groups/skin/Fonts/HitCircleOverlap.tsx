import { useContext } from "react";
import { HitCircleOverlapContext } from "@hooks/Fonts/HItCircleOverlapContext";
import UserInputEditor from "@components/editors/UserInputEditor";

export default function HitCircleOverlap() {
    const ctx = useContext(HitCircleOverlapContext);

    return (
        <UserInputEditor
            title="Hit Circle Number Overlap"
            description="The amount of pixels that the hit circle numbers overlap."
            resettable={ctx}
        />
    );
}
