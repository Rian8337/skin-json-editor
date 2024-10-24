import { NumberResettable } from "@structures/resettable";
import { Resettable } from "@structures/resettable";
import { UserInputEditor } from "@components/editors";

interface Props {
    /**
     * The width of the button.
     */
    width: Resettable<number> | NumberResettable;

    /**
     * The height of the button.
     */
    height: Resettable<number> | NumberResettable;

    /**
     * The scale of the button.
     */
    scale: Resettable<number> | NumberResettable;

    /**
     * The horizontal position of the button relative to the left of the screen.
     */
    x: Resettable<number> | NumberResettable;

    /**
     * The vertical position of the button relative to the bottom of the screen.
     */
    y: Resettable<number> | NumberResettable;
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
