import { NumberResettable, Resettable } from "@structures/resettable";
import { useState } from "react";
import BaseEditor from "./BaseEditor";
import "./UserInputEditor.css";

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
        resettable.defaultValue.toString()
    );

    return (
        <BaseEditor title={title} description={description}>
            <div className="json-item-editor-flex-container">
                <input
                    className="json-item-editor-input user-input-editor-input"
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
                                parseFloat(displayValue)
                            );
                        } else {
                            (resettable as Resettable<string>).setValue(
                                displayValue
                            );
                        }

                        setDisplayValue(resettable.directValue.toString());
                    }}
                />

                <input
                    className="json-item-editor-input"
                    type="reset"
                    onClick={() => {
                        resettable.reset();
                        setDisplayValue(resettable.defaultValue.toString());
                    }}
                />
            </div>
        </BaseEditor>
    );
}
