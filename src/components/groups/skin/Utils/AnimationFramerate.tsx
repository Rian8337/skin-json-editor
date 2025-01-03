import { UserInputEditor } from "@components/editors";
import { AnimationFramerateContext } from "@hooks/Utils";
import { useContext } from "react";

export default function AnimationFramerate() {
    const ctx = useContext(AnimationFramerateContext);

    return (
        <UserInputEditor
            title="Animation Framerate"
            description="The framerate at which animated textures are played. Setting this to negative defaults to a texture's frame count."
            resettable={ctx}
        />
    );
}
