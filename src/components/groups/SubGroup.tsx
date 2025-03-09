import { PropsWithChildren } from "react";
import EditorContainer from "@components/editors/EditorContainer";

interface Props {
    /**
     * The title of the sub-group.
     */
    title: string;

    /**
     * Whether to insert an editor container around the children.
     */
    withEditorContainer?: boolean;
}

export default function SubGroup(props: PropsWithChildren<Props>) {
    return (
        <div className="block">
            <p className="subtitle">{props.title}</p>
            {props.withEditorContainer ? (
                <EditorContainer>{props.children}</EditorContainer>
            ) : (
                props.children
            )}
        </div>
    );
}
