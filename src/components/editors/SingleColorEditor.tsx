import { Resettable } from "../../structures/resettable/Resettable";
import { validateColor } from "../../utils/validators";
import BaseEditor from "./BaseEditor";

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
    resettable: Resettable<string | undefined>;
}

export default function SingleColorEditor(props: Props) {
    const { title, description, resettable } = props;

    return (
        <BaseEditor title={title} description={description}>
            <div className="json-item-editor-flex-container">
                <input
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

                <input
                    className="json-item-editor-input color"
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
