import { useContext } from "react";
import { ScorePrefixContext } from "@hooks/Fonts";
import { UserInputEditor } from "@components/editors";

export default function ScorePrefix() {
    const ctx = useContext(ScorePrefixContext);

    return <UserInputEditor title="Score Numbers" resettable={ctx} />;
}
