import { useState } from "react";
import { Resettable } from "../../structures/resettable/Resettable";
import "./MultipleColorEditor.css";
import BaseEditor from "./BaseEditor";

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
    resettable: Resettable<string[]>;

    /**
     * The label beside the color input box.
     */
    inputLabel?: string;
}

export default function MultipleColorEditor(props: Props) {
    const { title, description, resettable, inputLabel } = props;
    const [hexCode, setHexCode] = useState("#FFFFFF");

    // Introduce additional hooks to convert the value from an array.
    const defaultValue = resettable.defaultValue[0];
    const [value, setValue] = useState(defaultValue);

    const modifyValue = (value = defaultValue) => {
        setValue(value);

        resettable.setValue(value.split(",").map((v) => v.trim()));
    };

    const resetValue = () => {
        setValue(defaultValue);

        resettable.reset();
    };

    return (
        <BaseEditor title={title} description={description}>
            <div className="json-item-editor-flex-container">
                {inputLabel ? (
                    <div className="color-editor-input-label">{inputLabel}</div>
                ) : null}

                <input
                    className="json-item-editor-input"
                    type="text"
                    value={value}
                    onChange={(event) => {
                        modifyValue(event.target.value || undefined);
                    }}
                />

                <input
                    className="json-item-editor-input"
                    type="reset"
                    onClick={() => {
                        resetValue();
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
        </BaseEditor>
    );
}
