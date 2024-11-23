import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Cursor?.rotateCursorTrail;

resettable.iniPropertyGetter = (ini) => {
    const rotateCursor = ini.get("Cursor", "RotateCursorTrail");

    if (!rotateCursor) {
        return resettable.defaultValue;
    }

    return rotateCursor === "1";
};

resettable.jsonSaveHandler = function (json) {
    json.Cursor ??= {};
    json.Cursor.rotateCursorTrail = this.value;
};

export const RotateCursorTrailContext = createContext(resettable.clone());

export function RotateCursorTrailContextProvider(props: PropsWithChildren) {
    return (
        <RotateCursorTrailContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RotateCursorTrailContext.Provider>
    );
}
