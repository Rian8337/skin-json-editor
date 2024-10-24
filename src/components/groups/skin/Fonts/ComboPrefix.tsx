import { useContext } from "react";
import { ComboPrefixContext } from "@hooks/Fonts";
import { UserInputEditor } from "@components/editors";

export default function ComboPrefix() {
    const ctx = useContext(ComboPrefixContext);

    return <UserInputEditor title="Combo Numbers" resettable={ctx} />;
}
