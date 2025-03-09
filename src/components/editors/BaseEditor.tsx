import { PropsWithChildren } from "react";

interface Props {
    /**
     * The title of the editor.
     */
    title: JSX.Element | string;

    /**
     * The description of the editor.
     */
    description?: JSX.Element | string;
}

export default function BaseEditor(props: PropsWithChildren<Props>) {
    const { title, description, children } = props;

    return (
        <div className="cell">
            <label className="label">{title}</label>
            <p className="help">{description ?? 'No description'}</p>
            <div className="block">
                {children}
            </div>
        </div>
    );
}
