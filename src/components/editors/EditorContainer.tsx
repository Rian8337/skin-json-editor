import { PropsWithChildren } from "react";

export default function EditorContainer(props: PropsWithChildren) {
    return <div className="grid">{props.children}</div>;
}
