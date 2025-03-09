import { SkinIniSection } from "@constants/SkinIniSection";
import { Resettable } from "@structures/resettable";
import { PropsWithChildren, createContext, useState } from "react";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Cursor?.rotateCursorTrail;

resettable.iniPropertyGetter = (ini) => {
    const rotateCursorTrail = ini.get(
        SkinIniSection.general,
        "CursorTrailRotate",
    );

    if (!rotateCursorTrail) {
        return resettable.defaultValue;
    }

    return rotateCursorTrail === "1";
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
