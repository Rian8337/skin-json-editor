import { Dispatch, SetStateAction } from "react";

/**
 * A React state hook without `undefined` overload.
 */
export type ResettableStateHook<T> = [T, Dispatch<SetStateAction<T>>];
