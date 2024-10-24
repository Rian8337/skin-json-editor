import { useMemo, useState } from "react";
import "./MultipleColorEditor.css";
import BaseEditor from "./BaseEditor";
import { ArrayResettable, Resettable } from "@structures/resettable";

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
    resettable: ArrayResettable<string> | Resettable<string[]>;

    /**
     * The label beside the color input box.
     */
    inputLabel?: string;
}

export default function MultipleColorEditor(props: Props) {
    const { title, description, resettable, inputLabel } = props;
    const [hexCode, setHexCode] = useState("#FFFFFF");

    const colorList = useMemo(
        () =>
            resettable.value.map((color, index, arr) => (
                <div key={index} className="json-item-editor-flex-container">
                    <input
                        className="json-item-editor-input"
                        type="color"
                        value={color}
                        disabled
                    />

                    <input
                        className="json-item-editor-input color"
                        type="text"
                        value={color}
                        disabled
                    />

                    <input
                        className="json-item-editor-input"
                        type="button"
                        value="↑"
                        disabled={index === 0}
                        onClick={() => {
                            const newValue = arr.slice();

                            [newValue[index - 1], newValue[index]] = [
                                newValue[index],
                                newValue[index - 1],
                            ];

                            //@ts-expect-error: existential generics are not supported
                            resettable.setValue(newValue);
                        }}
                    />

                    <input
                        className="json-item-editor-input"
                        type="button"
                        value="↓"
                        disabled={index === arr.length - 1}
                        onClick={() => {
                            const newValue = arr.slice();

                            [newValue[index], newValue[index + 1]] = [
                                newValue[index + 1],
                                newValue[index],
                            ];

                            //@ts-expect-error: existential generics are not supported
                            resettable.setValue(newValue);
                        }}
                    />

                    <input
                        className="json-item-editor-input"
                        type="button"
                        value="Remove"
                        disabled={arr.length === 1}
                        onClick={() => {
                            const newValue = arr.slice();
                            newValue.splice(index, 1);

                            //@ts-expect-error: existential generics are not supported
                            resettable.setValue(newValue);
                        }}
                    />
                </div>
            )),
        [resettable]
    );

    return (
        <BaseEditor title={title} description={description}>
            <div className="json-item-editor-flex-container">
                {inputLabel ? (
                    <div className="color-editor-input-label">{inputLabel}</div>
                ) : null}

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
                    value={hexCode}
                    onChange={(event) => {
                        setHexCode(event.target.value.toUpperCase());
                    }}
                />

                <input
                    className="json-item-editor-input color"
                    type="text"
                    disabled
                    value={hexCode}
                />

                <input
                    className="json-item-editor-input"
                    type="button"
                    value="Add"
                    onClick={() => {
                        //@ts-expect-error: existential generics are not supported
                        resettable.setValue(resettable.value.concat(hexCode));
                    }}
                />
            </div>

            {colorList}
        </BaseEditor>
    );
}
