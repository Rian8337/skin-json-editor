import { NumberResettable } from "@structures/resettable";
import { Resettable } from "@structures/resettable";
import BaseEditor from "./BaseEditor";
import "./UserInputEditor.css";

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
    resettable: Resettable<string> | Resettable<number> | NumberResettable;
}

export default function UserInputEditor(props: Props) {
    const { title, description, resettable } = props;

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
                    value={resettable.value}
                    onChange={(event) => {
                        // Default to default value if there is nothing in the input.
                        if (
                            resettable instanceof NumberResettable ||
                            typeof resettable.value === "number"
                        ) {
                            const value = parseFloat(event.target.value);

                            (resettable as Resettable<number>).setValue(
                                !Number.isNaN(value) ? value : undefined
                            );
                        } else {
                            (resettable as Resettable<string>).setValue(
                                event.target.value || undefined
                            );
                        }
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
        </BaseEditor>
    );
}
