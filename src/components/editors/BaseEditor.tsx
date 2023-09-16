import { PropsWithChildren } from "react";
import "./BaseEditor.css";

interface Props {
    /**
     * The title of the editor.
     */
    title: string;

    /**
     * The description of the editor.
     */
    description?: string;
}

export default function BaseEditor(props: PropsWithChildren<Props>) {
    const { title, description, children } = props;

    return (
        <div className="json-item-editor">
            <div className="json-item-editor-title">{title}</div>
            {description ? (
                <div className="json-item-editor-description">
                    {description}
                </div>
            ) : null}

            {children}
        </div>
    );
}
