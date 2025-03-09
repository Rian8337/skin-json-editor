import { Resettable } from "@structures/resettable";
import { validateColor } from "@utils/validators";
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
    resettable: Resettable<string> | Resettable<string | undefined>;
}

export default function SingleColorEditor(props: Props) {
    const { title, description, resettable } = props;

    return (
        <BaseEditor title={title} description={description}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input color-input"
                        type="color"
                        // The default color of a color input is black.
                        // (ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#providing_a_default_color)
                        value={
                            resettable.value && validateColor(resettable.value)
                                ? resettable.value
                                : "#000000"
                        }
                        onChange={(event) => {
                            resettable.setValue(
                                event.target.value.toUpperCase() || undefined
                            );
                        }}
                    />
                </div>

                <div className="control">
                    <input
                        className="input color"
                        type="text"
                        value={resettable.value ?? ""}
                        maxLength={7}
                        onChange={(event) => {
                            const value = event.target.value;

                            if (value) {
                                resettable.setValue(
                                    validateColor(value)
                                        ? value.toUpperCase()
                                        : value
                                );
                            } else {
                                resettable.reset();
                            }
                        }}
                    />
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
                            <FontAwesomeIcon icon={faUndo}/>
                        </span>
                    </button>
                </div>
            </div>
        </BaseEditor>
    );
}
