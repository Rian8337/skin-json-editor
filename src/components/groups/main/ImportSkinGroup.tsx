import { FormEvent, FormEventHandler } from "react";
import Group from "../Group";
import "./ImportSkinGroup.css";
import { SkinJson } from "@structures/skin/SkinJson";
import SubGroup from "../SubGroup";
import { SkinIni } from "@structures/skin/SkinIni";
import { useSkinSettings } from "@hooks/SkinContextProvider";

function ImportSkinSubGroup(props: {
    title: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    accept: string;
}) {
    return (
        <SubGroup title={props.title}>
            <form
                className="import-skin-form"
                onSubmit={props.onSubmit}
                encType="multipart/form-data"
            >
                <input type="file" accept={props.accept} name="file" />
                <br />
                <input
                    className="import-skin-form-submit"
                    type="submit"
                    value="Load"
                />
            </form>
        </SubGroup>
    );
}

export default function ImportSkinGroup() {
    const skinSettings = useSkinSettings();

    const onJsonSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const file = (
            (event.target as HTMLFormElement).elements[0] as HTMLInputElement
        ).files?.[0];

        if (!file) {
            return;
        }

        file.text()
            .then((text) => {
                let json: SkinJson;

                try {
                    json = JSON.parse(text) as SkinJson;
                } catch {
                    alert(
                        "Encountered an error when attempting to process your skin.json file."
                    );

                    return;
                }

                const resetAll = confirm(
                    "Would you like to reset all values before loading the skin.json file?"
                );

                for (const setting of skinSettings.current) {
                    if (setting.loadableFromJSON) {
                        setting.loadFromJSON(json, resetAll);
                    }
                }

                alert("The skin.json file has been loaded successfully!");
            })
            .catch(() => {
                alert(
                    "Encountered an error when attempting to process your skin.json file."
                );
            });
    };

    const onIniSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const file = (
            (event.target as HTMLFormElement).elements[0] as HTMLInputElement
        ).files?.[0];

        if (!file) {
            return;
        }

        file.text()
            .then((text) => {
                const resetAll = confirm(
                    "Would you like to reset all values before loading the skin.json file?"
                );

                const ini = new SkinIni(text);

                for (const setting of skinSettings.current) {
                    if (setting.loadableFromIni) {
                        setting.loadFromIni(ini, resetAll);
                    }
                }

                alert("The skin.ini file has been loaded successfully!");
            })
            .catch(() => {
                alert(
                    "Encountered an error when attempting to process your skin.ini file."
                );
            });
    };

    return (
        <Group title="Load Existing Configuration">
            <ImportSkinSubGroup
                title="skin.json"
                onSubmit={onJsonSubmit}
                accept=".json"
            />

            <ImportSkinSubGroup
                title="skin.ini"
                onSubmit={onIniSubmit}
                accept=".ini"
            />
        </Group>
    );
}
