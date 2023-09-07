import { NumberResettable } from "../../../../structures/resettable/NumberResettable";
import { Resettable } from "../../../../structures/resettable/Resettable";
import UserInputEditor from "../../../editors/UserInputEditor";

interface Props {
    /**
     * The width of the button.
     */
    width: NumberResettable;

    /**
     * The height of the button.
     */
    height: NumberResettable;

    /**
     * The scale of the button.
     */
    scale: Resettable<number>;

    /**
     * The horizontal position of the button relative to the left of the screen.
     */
    x: NumberResettable;

    /**
     * The vertical position of the button relative to the bottom of the screen.
     */
    y: NumberResettable;
}

export default function LayoutButtonEditors(props: Props) {
    const { width, height, scale, x, y } = props;

    return (
        <>
            <UserInputEditor title="Width" resettable={width} />
            <UserInputEditor title="Height" resettable={height} />
            <UserInputEditor title="Scale" resettable={scale} />
            <UserInputEditor title="Horizontal Offset" resettable={x} />
            <UserInputEditor title="Vertical Offset" resettable={y} />
        </>
    );
}
