import { useContext } from "react";
import { HitCirclePrefixContext } from "../../../../hooks/Fonts/HitCirclePrefixContext";
import UserInputEditor from "../../../editors/UserInputEditor";

export default function HitCirclePrefix() {
    const ctx = useContext(HitCirclePrefixContext);

    return <UserInputEditor title="Hit Circle Numbers" resettable={ctx} />;
}
