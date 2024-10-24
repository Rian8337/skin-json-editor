import {
    Resettable,
    ResettableJSONSaveHandler,
    ResettableStateHook,
} from "./Resettable";

/**
 * A `Resettable` that holds an array.
 */
export class ArrayResettable<T> extends Resettable<T[]> {
    override get isDefault(): boolean {
        return (
            this.value.length === this.defaultValue.length &&
            this.value.every((v, i) => v === this.defaultValue[i])
        );
    }

    override setValue(value = this.defaultValue): void {
        super.setValue(value.slice());
    }

    override clone(): ArrayResettable<T> {
        const clone = new ArrayResettable(this.defaultValue.slice());

        clone._value = this._value.slice();
        clone.jsonSaveHandler = this.jsonSaveHandler as
            | ResettableJSONSaveHandler<ArrayResettable<T>>
            | undefined;

        return clone;
    }

    override with(stateHook: ResettableStateHook<T[]>): ArrayResettable<T> {
        const clone = this.clone();

        clone.attachStateHook(stateHook);

        return clone;
    }
}