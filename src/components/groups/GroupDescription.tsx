import { PropsWithChildren } from "react";

export default function GroupDescription(props: PropsWithChildren) {
    return <p className="pb-2">{props.children}</p>;
}
