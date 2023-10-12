import "./Group.css";
import { PropsWithChildren, useState } from "react";

interface Props {
    /**
     * The title of the group.
     */
    title: string;

    /**
     * Whether this group can be collapsed. Defaults to `false`.
     */
    collapsible?: boolean;
}

export default function Group(props: PropsWithChildren<Props>) {
    const [visible, setVisible] = useState(!props.collapsible);

    return (
        <>
            <hr className="group-break-line" />
            <div className="group-item">
                <div
                    className={`group-title${
                        props.collapsible ? "-collapsible" : ""
                    }`}
                    onClick={() => {
                        setVisible((visible) =>
                            props.collapsible ? !visible : true
                        );
                    }}
                >
                    {props.title}{" "}
                    {props.collapsible &&
                        (visible ? <>&#128316;</> : <>&#128317;</>)}
                </div>

                <div className={visible ? "" : "collapsed"}>
                    {props.children}
                </div>
            </div>
        </>
    );
}
