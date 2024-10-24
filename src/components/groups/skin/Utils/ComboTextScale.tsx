import { useContext } from "react";
import { ComboTextScaleContext } from "@hooks/Utils";
import UserInputEditor from "@components/editors/UserInputEditor";

export default function ComboTextScale() {
    const ctx = useContext(ComboTextScaleContext);

    return (
        <UserInputEditor
            title="Combo Number Scale"
            description="Increasing this number will increase the size of the numbers inside hitobjects in gameplay, and vice versa."
            resettable={ctx}
        />
    );
}
