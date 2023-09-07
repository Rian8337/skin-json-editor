import "./Group.css";
import { PropsWithChildren } from "react";

interface Props {
    /**
     * The title of the group.
     */
    title: string;
}

export default function Group(props: PropsWithChildren<Props>) {
    return (
        <>
            <hr className="group-break-line" />
            <div className="group-item">
                <div className="group-title">{props.title}</div>
                {props.children}
            </div>
        </>
    );
}
