import { SkinIniSection } from "@constants/SkinIniSection";
import { Resettable } from "@structures/resettable";
import { PropsWithChildren, createContext, useState } from "react";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Cursor?.rotateCursor;

resettable.iniPropertyGetter = (ini) => {
    const rotateCursor = ini.get(SkinIniSection.general, "CursorRotate");

    if (!rotateCursor) {
        return resettable.defaultValue;
    }

    return rotateCursor === "1";
};

resettable.jsonSaveHandler = function (json) {
    json.Cursor ??= {};
    json.Cursor.rotateCursor = this.value;
};

export const RotateCursorContext = createContext(resettable.clone());

export function RotateCursorContextProvider(props: PropsWithChildren) {
    return (
        <RotateCursorContext.Provider
            value={resettable.with(useState(resettable.value))}
        >
            {props.children}
        </RotateCursorContext.Provider>
    );
}
