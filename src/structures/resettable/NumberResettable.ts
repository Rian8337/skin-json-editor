import { Resettable } from "./Resettable";
import { NumberResettableType } from "./NumberResettableType";
import { ResettableJSONSaveHandler } from "./ResettableJSONSaveHandler";
import { ResettableStateHook } from "./ResettableStateHook";

/**
 * The options for a `NumberResettable`.
 */
export interface NumberResettableOptions {
    /**
     * The default value of this `NumberResettable`.
     */
    readonly defaultValue: number;

    /**
     * The data type of the number stored in this `NumberResettable`. Defaults to `float`.
     */
    readonly type?: NumberResettableType;

    /**
     * The minimum number allowed.
     */
    readonly minValue?: number;

    /**
     * The maximum number allowed.
     */
    readonly maxValue?: number;

    /**
     * The precision allowed.
     */
    readonly step?: number;
}

/**
 * A number `Resettable` that has additional properties to deal with numbers.
 */
export class NumberResettable
    extends Resettable<number>
    implements NumberResettableOptions
{
    readonly type: NumberResettableType;
    readonly minValue?: number;
    readonly maxValue?: number;
    readonly step?: number;

    /**
     * Creates a new `NumberResettable`.
     *
     * @param options The options for this `NumberResettable`.
     */
    constructor(options: NumberResettableOptions) {
        super(options.defaultValue);

        this.type = options.type ?? NumberResettableType.float;
        this.minValue = options.minValue;
        this.maxValue = options.maxValue;
        this.step = options.step;
    }

    override setValue(value = this.defaultValue) {
        if (this.minValue !== undefined) {
            value = Math.max(this.minValue, value);
        }

        if (this.maxValue !== undefined) {
            value = Math.min(this.maxValue, value);
        }

        switch (this.type) {
            case NumberResettableType.integer:
                super.setValue(Math.trunc(value));
                break;

            case NumberResettableType.float:
                value = Math.fround(value);

                if (this.step !== undefined) {
                    value = Math.fround(value / this.step) * this.step;

                    // Ensure that the precision follows the step.
                    const precision =
                        this.step.toString().split(".").at(1)?.length ?? 0;

                    value = parseFloat(value.toFixed(precision));
                }

                super.setValue(value);
                break;
        }
    }

    //@ts-expect-error: method should return its own instance type
    override clone(): NumberResettable {
        const clone = new NumberResettable({
            defaultValue: this.defaultValue,
            type: this.type,
            minValue: this.minValue,
            maxValue: this.maxValue,
            step: this.step,
        });

        clone._value = this._value;

        clone.jsonPropertyGetter = this.jsonPropertyGetter;
        clone.iniPropertyGetter = this.iniPropertyGetter;
        clone.propertyValidator = this.propertyValidator;

        clone.jsonSaveHandler = this.jsonSaveHandler as
            | ResettableJSONSaveHandler<NumberResettable>
            | undefined;

        return clone;
    }

    //@ts-expect-error: method should return its own instance type
    override with(stateHook: ResettableStateHook<number>): NumberResettable {
        const clone = this.clone();

        clone.attachStateHook(stateHook);

        return clone;
    }
}
