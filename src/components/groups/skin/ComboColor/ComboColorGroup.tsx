import { useContext } from "react";
import Group from "../../Group";
import ColorList from "./ColorList";
import ForceOverride from "./ForceOverride";
import { ForceOverrideContext } from "../../../../hooks/ComboColor/ForceOverrideContext";

export default function ComboColorGroup() {
    const forceOverride = useContext(ForceOverrideContext);

    return (
        <Group title="Combo Color">
            <ForceOverride />
            {forceOverride.value ? <ColorList /> : null}
        </Group>
    );
}
