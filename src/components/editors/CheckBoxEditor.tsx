import { Resettable } from "../../structures/resettable/Resettable";
import "./BaseEditor.css";

interface Props {
    /**
     * The title of the checkbox.
     */
    title: string;

    /**
     * The description of the checkbox.
     */
    description?: string;

    /**
     * The configuration that the checkbox is responsible for.
     */
    resettable: Resettable<boolean>;
}

export default function CheckBoxEditor(props: Props) {
    const { title, description, resettable } = props;

    return (
        <div className="json-item-editor">
            <div className="json-item-editor-title">{title}</div>
            {description ? (
                <div className="json-item-editor-description">
                    {description}
                </div>
            ) : null}

            <div className="json-item-editor-flex-container">
                <input
                    className="json-item-editor-input"
                    type="checkbox"
                    checked={resettable.value}
                    onChange={(event) => {
                        resettable.setValue(event.target.checked);
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
        </div>
    );
}
