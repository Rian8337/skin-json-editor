import { useContext } from "react";
import { ComboPrefixContext } from "@hooks/Fonts/ComboPrefixContext";
import UserInputEditor from "@components/editors/UserInputEditor";

export default function ComboPrefix() {
    const ctx = useContext(ComboPrefixContext);

    return <UserInputEditor title="Combo Numbers" resettable={ctx} />;
}
