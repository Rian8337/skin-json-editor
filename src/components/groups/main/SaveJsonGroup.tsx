import Group from "../Group";
import "./SaveJsonGroup.css";
import { SkinJson } from "@structures/skin/SkinJson";
import { useSkinSettings } from "@hooks/SkinContextProvider";

export default function SaveJsonGroup() {
    const skinSettings = useSkinSettings();

    const onClick = () => {
        const json: SkinJson = {};

        try {
            for (const setting of skinSettings.current) {
                if (setting.savableToJSON) {
                    setting.saveToJSON(json);
                }
            }
        } catch (e) {
            alert((e as Error).message);

            return;
        }

        const blob = new Blob([JSON.stringify(json, null, "\t")], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);

        const dl = document.createElement("a");
        dl.setAttribute("href", url);
        dl.setAttribute("download", "skin.json");
        dl.setAttribute("target", "_blank");
        dl.click();

        URL.revokeObjectURL(url);
    };

    return (
        <Group title="Save skin.json">
            <div className="save-skin-json-container">
                <input
                    className="save-skin-json-input"
                    type="button"
                    value="Save"
                    onClick={onClick}
                />
            </div>
        </Group>
    );
}
