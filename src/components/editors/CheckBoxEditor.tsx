import { Resettable } from "@structures/resettable";
import BaseEditor from "./BaseEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

interface Props {
    /**
     * The title of the checkbox.
     */
    title: JSX.Element | string;

    /**
     * The description of the checkbox.
     */
    description?: JSX.Element | string;

    /**
     * The configuration that the checkbox is responsible for.
     */
    resettable: Resettable<boolean>;
}

export default function CheckBoxEditor(props: Props) {
    const { title, description, resettable } = props;

    return (
        <BaseEditor title={title} description={description}>
            <div className="field is-grouped">
                <div className="control">
                    <label className="checkbox pr-2 py-3">
                        <input
                            type="checkbox"
                            checked={resettable.value}
                            onChange={(event) => {
                                resettable.setValue(event.target.checked);
                            }}
                        />
                    </label>
                </div>

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
        </BaseEditor>
    );
}
