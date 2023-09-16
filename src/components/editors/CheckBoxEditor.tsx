import { Resettable } from "../../structures/resettable/Resettable";
import BaseEditor from "./BaseEditor";

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
        <BaseEditor title={title} description={description}>
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
        </BaseEditor>
    );
}
