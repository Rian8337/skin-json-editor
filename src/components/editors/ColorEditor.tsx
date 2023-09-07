import { useState } from "react";
import { Resettable } from "../../structures/resettable/Resettable";
import "./ColorEditor.css";

interface Props {
    /**
     * The title of the input.
     */
    title: string;

    /**
     * The description of the input.
     */
    description?: string;

    /**
     * The configuration that the input is responsible for.
     */
    resettable: Resettable<string | undefined>;

    /**
     * The label beside the color input box.
     */
    inputLabel?: string;

    /**
     * Whether to accept multiple colors. Defaults to `false`.
     */
    acceptMultipleColors?: boolean;
}

export default function ColorEditor(props: Props) {
    const { title, description, resettable, inputLabel, acceptMultipleColors } =
        props;
    const [hexCode, setHexCode] = useState("#FFFFFF");

    return (
        <div className="json-item-editor">
            <div className="json-item-editor-title">{title}</div>
            {description ? (
                <div className="json-item-editor-description">
                    {description}
                </div>
            ) : null}

            <div className="json-item-editor-flex-container">
                {inputLabel ? (
                    <div className="color-editor-input-label">{inputLabel}</div>
                ) : null}

                <input
                    className="json-item-editor-input"
                    type="text"
                    value={resettable.value}
                    maxLength={acceptMultipleColors ? undefined : 7}
                    onChange={(event) => {
                        resettable.setValue(event.target.value || undefined);
                    }}
                />

                <input
                    className="json-item-editor-input"
                    type="reset"
                    onClick={() => {
                        resettable.reset();
                    }}
                />
            </div>

            <div className="json-item-editor-flex-container">
                <div className="color-editor-input-label">Picker</div>

                <input
                    className="json-item-editor-input"
                    type="color"
                    defaultValue={hexCode}
                    onChange={(event) => {
                        setHexCode(event.target.value.toUpperCase());
                    }}
                />

                <input
                    className="json-item-editor-input"
                    type="text"
                    disabled
                    value={hexCode}
                />
            </div>
        </div>
    );
}
