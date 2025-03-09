import { NumberResettable, Resettable } from "@structures/resettable";
import { useState } from "react";
import BaseEditor from "./BaseEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

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
    resettable: Resettable<string> | Resettable<number> | NumberResettable;
}

export default function UserInputEditor(props: Props) {
    const { title, description, resettable } = props;
    const [displayValue, setDisplayValue] = useState(
        resettable.defaultValue.toString(),
    );

    return (
        <BaseEditor title={title} description={description}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type={
                            resettable instanceof NumberResettable ||
                            typeof resettable.defaultValue === "number"
                                ? "number"
                                : "text"
                        }
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
                        value={displayValue}
                        onChange={(event) => {
                            setDisplayValue(event.target.value);
                        }}
                        onBlur={() => {
                            // Default to default value if there is nothing in the input.
                            if (
                                resettable instanceof NumberResettable ||
                                typeof resettable.value === "number"
                            ) {
                                (resettable as Resettable<number>).setValue(
                                    parseFloat(displayValue),
                                );
                            } else {
                                (resettable as Resettable<string>).setValue(
                                    displayValue,
                                );
                            }

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
                            <FontAwesomeIcon icon={faUndo} />
                        </span>
                    </button>
                </div>
            </div>
        </BaseEditor>
    );
}
