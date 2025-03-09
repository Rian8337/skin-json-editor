import { NumberResettable, Resettable } from "@structures/resettable";
import { useState } from "react";
import BaseEditor from "./BaseEditor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUndo} from "@fortawesome/free-solid-svg-icons";

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
    resettable: Resettable<number> | NumberResettable;
}

export default function SliderInputEditor(props: Props) {
    const { title, description, resettable } = props;
    const [displayValue, setDisplayValue] = useState(
        resettable.defaultValue.toString()
    );

    return (
        <BaseEditor title={title} description={description}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type="number"
                        value={displayValue}
                        min={
                            resettable instanceof NumberResettable
                                ? resettable.minValue
                                : undefined
                        }
                        max={
                            resettable instanceof NumberResettable
                                ? resettable.maxValue
                                : undefined
                        }
                        onChange={(event) => {
                            setDisplayValue(event.target.value || "");
                        }}
                        onBlur={() => {
                            resettable.setValue(parseFloat(displayValue));
                            setDisplayValue(resettable.directValue.toString());
                        }}
                    />
                </div>
                <div className="control">
                    <button
                        className="button"
                        type="reset"
                        onClick={() => {
                            resettable.reset();
                            setDisplayValue(resettable.defaultValue.toString());
                        }}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faUndo}/>
                        </span>
                    </button>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input
                        type="range"
                        value={resettable.value}
                        min={
                            resettable instanceof NumberResettable
                                ? resettable.minValue
                                : undefined
                        }
                        max={
                            resettable instanceof NumberResettable
                                ? resettable.maxValue
                                : undefined
                        }
                        step={
                            resettable instanceof NumberResettable
                                ? resettable.step
                                : undefined
                        }
                        onChange={(event) => {
                            resettable.setValue(parseFloat(event.target.value));
                            setDisplayValue(event.target.value);
                        }}
                    />
                </div>
            </div>
        </BaseEditor>
    );
}
