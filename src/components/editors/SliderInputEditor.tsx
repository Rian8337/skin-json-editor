import { NumberResettable, Resettable } from "@structures/resettable";
import BaseEditor from "./BaseEditor";
import "./SliderInputEditor.css";

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
    resettable: Resettable<number> | NumberResettable;
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
                        resettable instanceof NumberResettable
                            ? resettable.minValue
                            : undefined
                    }
                    max={
                        resettable instanceof NumberResettable
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
                onChange={(event) => {
                    resettable.setValue(parseFloat(event.target.value));
                }}
            />
        </BaseEditor>
    );
}
