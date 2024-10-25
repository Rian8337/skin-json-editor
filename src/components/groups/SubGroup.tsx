import { PropsWithChildren } from "react";
import "./SubGroup.css";
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
        <div className="subgroup-item">
            <hr />
            <div className="subgroup-title">{props.title}</div>

            {props.withEditorContainer ? (
                <EditorContainer>{props.children}</EditorContainer>
            ) : (
                props.children
            )}
        </div>
    );
}
