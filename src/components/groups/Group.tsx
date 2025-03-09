import { PropsWithChildren, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons"

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
        <div className="card is-shadowless">
            <header className="card-header" onClick={() => {
                setVisible((visible) =>
                    props.collapsible ? !visible : true
                );
            }}>
                <p className="card-header-title">{props.title}</p>
                {props.collapsible ?
                    <button className="card-header-icon" aria-label="more options">
                          <span className="icon">
                            <FontAwesomeIcon icon={visible ? faAngleUp : faAngleDown} aria-hidden="true"/>
                          </span>
                    </button>
                : '' }
            </header>

            <div className={'card-content ' + (visible ? "" : "is-hidden")}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
