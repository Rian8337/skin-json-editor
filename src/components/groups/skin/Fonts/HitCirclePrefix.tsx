import { useContext } from "react";
import { HitCirclePrefixContext } from "@hooks/Fonts";
import UserInputEditor from "@components/editors/UserInputEditor";

export default function HitCirclePrefix() {
    const ctx = useContext(HitCirclePrefixContext);

    return <UserInputEditor title="Hit Circle Numbers" resettable={ctx} />;
}
