import { PropsWithChildren } from "react";
import "./EditorContainer.css";

export default function EditorContainer(props: PropsWithChildren) {
    return <div className="editor-container">{props.children}</div>;
}
