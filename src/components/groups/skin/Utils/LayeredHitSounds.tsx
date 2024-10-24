import CheckBoxEditor from "@components/editors/CheckBoxEditor";
import { LayeredHitSoundsContext } from "@hooks/Utils/LayeredHitSoundsContext";
import { useContext } from "react";

export default function LayeredHitSounds() {
    const ctx = useContext(LayeredHitSoundsContext);

    return (
        <CheckBoxEditor
            title="Layered Hit Sounds"
            description="Whether hitnormal hitsounds should always be played."
            resettable={ctx}
        />
    );
}
