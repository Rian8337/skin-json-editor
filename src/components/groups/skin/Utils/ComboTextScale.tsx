import { useContext } from "react";
import { ComboTextScaleContext } from "../../../../hooks/Utils/ComboTextScaleContext";
import UserInputEditor from "../../../editors/UserInputEditor";

export default function ComboTextScale() {
    const ctx = useContext(ComboTextScaleContext);

    return (
        <UserInputEditor
            title="Combo Counter Scale"
            description="Increasing this number will increase the size of numbers in the combo counter in gameplay, and vice versa."
            resettable={ctx}
        />
    );
}
