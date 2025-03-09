import { useMemo, useState } from "react";
import "./BaseEditor.css";
import BaseEditor from "./BaseEditor";
import { ArrayResettable, Resettable } from "@structures/resettable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAdd,
    faArrowDown,
    faArrowUp,
    faRemove,
    faUndo,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    /**
     * The title of the input.
     */
    title: JSX.Element | string;

    /**
     * The description of the input.
     */
    description?: JSX.Element | string;

    /**
     * The configuration that the input is responsible for.
     */
    resettable: ArrayResettable<string> | Resettable<string[]>;

    /**
     * The label beside the color input box.
     */
    inputLabel?: JSX.Element | string;
}

export default function MultipleColorEditor(props: Props) {
    const { title, description, resettable, inputLabel } = props;
    const [hexCode, setHexCode] = useState("#FFFFFF");

    const colorList = useMemo(
        () =>
            resettable.value.map((color, index, arr) => (
                <div key={index} className="field has-addons">
                    <div className="control">
                        <input
                            className="input color-input has-background-black-bis"
                            type="color"
                            value={color}
                            disabled
                        />
                    </div>

                    <div className="control">
                        <input
                            className="input color has-background-black-bis"
                            type="text"
                            value={color}
                            disabled
                        />
                    </div>

                    <div className="control">
                        <button
                            className="button"
                            type="button"
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
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </span>
                        </button>
                    </div>

                    <div className="control">
                        <button
                            className="button"
                            type="button"
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
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                        </button>
                    </div>

                    <div className="control">
                        <button
                            className="button"
                            type="button"
                            disabled={arr.length === 1}
                            onClick={() => {
                                const newValue = arr.slice();
                                newValue.splice(index, 1);

                                //@ts-expect-error: existential generics are not supported
                                resettable.setValue(newValue);
                            }}
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faRemove} />
                            </span>
                        </button>
                    </div>
                </div>
            )),
        [resettable],
    );

    return (
        <BaseEditor title={title} description={description}>
            <div className="field">
                {inputLabel ? (
                    <label className="label">{inputLabel}</label>
                ) : null}

                <div className="control">
                    <button
                        className="button"
                        type="reset"
                        onClick={() => {
                            resettable.reset();
                        }}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faUndo} />
                        </span>
                    </button>
                </div>
            </div>

            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input color-input"
                        type="color"
                        value={hexCode}
                        onChange={(event) => {
                            setHexCode(event.target.value.toUpperCase());
                        }}
                    />
                </div>
                <div className="control">
                    <input
                        className="input color"
                        type="text"
                        value={hexCode}
                        onChange={(event) => {
                            setHexCode(event.target.value.toUpperCase());
                        }}
                    />
                </div>

                <div className="control">
                    <button
                        className="button"
                        type="button"
                        onClick={() => {
                            resettable.setValue(
                                //@ts-expect-error: existential generics are not supported
                                resettable.value.concat(hexCode),
                            );
                        }}
                    >
                        <span className="icon px-5">
                            <FontAwesomeIcon icon={faAdd} />
                        </span>
                    </button>
                </div>
            </div>

            {colorList}
        </BaseEditor>
    );
}
