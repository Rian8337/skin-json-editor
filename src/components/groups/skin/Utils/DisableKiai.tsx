import { useContext } from "react";
import { DisableKiaiContext } from "../../../../hooks/Utils/DisableKiaiContext";
import CheckBoxEditor from "../../../editors/CheckBoxEditor";

export default function DisableKiai() {
    const ctx = useContext(DisableKiaiContext);

    return <CheckBoxEditor title="Disable Kiai Flashes" resettable={ctx} />;
}
