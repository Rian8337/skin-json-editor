import { isNumberResettable } from "../../structures/resettable/NumberResettable";
import { Resettable } from "../../structures/resettable/Resettable";
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
    resettable: Resettable<string | number>;
}

export default function UserInputEditor(props: Props) {
    const { title, description, resettable } = props;

    return (
        <BaseEditor title={title} description={description}>
            <div className="json-item-editor-flex-container">
                <input
                    className="json-item-editor-input user-input-editor-input"
                    type={isNumberResettable(resettable) ? "number" : "text"}
                    min={
                        isNumberResettable(resettable)
                            ? resettable.minValue
                            : undefined
                    }
                    max={
                        isNumberResettable(resettable)
                            ? resettable.maxValue
                            : undefined
                    }
                    value={resettable.value}
                    onChange={(event) => {
                        // Default to default value if there is nothing in the input.
                        if (isNumberResettable(resettable)) {
                            const value = parseFloat(event.target.value);

                            resettable.setValue(
                                !Number.isNaN(value) ? value : undefined
                            );
                        } else {
                            resettable.setValue(
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
