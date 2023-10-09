import { useContext } from "react";
import { ScorePrefixContext } from "../../../../hooks/Fonts/ScorePrefixContext";
import UserInputEditor from "../../../editors/UserInputEditor";

export default function ScorePrefix() {
    const ctx = useContext(ScorePrefixContext);

    return <UserInputEditor title="Score Numbers" resettable={ctx} />;
}
