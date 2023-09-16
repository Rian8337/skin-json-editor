import { isNumberResettable } from "../../structures/resettable/NumberResettable";
import { Resettable } from "../../structures/resettable/Resettable";
import BaseEditor from "./BaseEditor";
import "./SliderInputEditor.css";

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
    resettable: Resettable<number>;
}

export default function SliderInputEditor(props: Props) {
    const { title, description, resettable } = props;

    return (
        <BaseEditor title={title} description={description}>
            <div className="json-item-editor-flex-container">
                <input
                    className="slider-input-editor-display"
                    type="number"
                    value={resettable.value}
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
                    onChange={(event) => {
                        resettable.setValue(
                            parseFloat(event.target.value) || undefined
                        );
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

            <input
                type="range"
                value={resettable.value}
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
                step={
                    isNumberResettable(resettable) ? resettable.step : undefined
                }
                onChange={(event) => {
                    resettable.setValue(parseFloat(event.target.value));
                }}
            />
        </BaseEditor>
    );
}
