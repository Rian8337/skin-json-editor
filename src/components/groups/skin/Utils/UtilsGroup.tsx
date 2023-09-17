import Group from "../../Group";
import ComboTextScale from "./ComboTextScale";
import DisableKiai from "./DisableKiai";
import LimitComboTextLength from "./LimitComboTextLength";

export default function UtilsGroup() {
    return (
        <Group title="Utilities" collapsible={true}>
            <LimitComboTextLength />
            <DisableKiai />
            <ComboTextScale />
        </Group>
    );
}
