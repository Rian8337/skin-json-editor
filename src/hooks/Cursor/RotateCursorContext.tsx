import { PropsWithChildren, createContext, useState } from "react";
import { Resettable } from "@structures/resettable";

const resettable = new Resettable(true);

resettable.jsonPropertyGetter = (json) => json.Cursor?.rotateCursor;

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
