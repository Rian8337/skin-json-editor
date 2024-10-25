import { CheckBoxEditor } from "@components/editors";
import { LayeredHitSoundsContext } from "@hooks/Utils";
import { useContext } from "react";

export default function LayeredHitSounds() {
    const ctx = useContext(LayeredHitSoundsContext);

    return (
        <CheckBoxEditor
            title="Layered Hit Sounds"
            description={
                <>
                    Whether <code>hitnormal</code> hitsounds should always be
                    played.
                </>
            }
            resettable={ctx}
        />
    );
}
