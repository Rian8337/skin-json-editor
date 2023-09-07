import { PropsWithChildren } from "react";
import "./SubGroup.css";

interface Props {
    /**
     * The title of the sub-group.
     */
    title: string;
}

export default function SubGroup(props: PropsWithChildren<Props>) {
    return (
        <div className="subgroup-item">
            <hr />
            <div className="subgroup-title">{props.title}</div>

            {props.children}
        </div>
    );
}
