import { useContext } from "react";
import { DisableKiaiContext } from "@hooks/Utils";
import CheckBoxEditor from "@components/editors/CheckBoxEditor";

export default function DisableKiai() {
    const ctx = useContext(DisableKiaiContext);

    return <CheckBoxEditor title="Disable Kiai Flashes" resettable={ctx} />;
}
