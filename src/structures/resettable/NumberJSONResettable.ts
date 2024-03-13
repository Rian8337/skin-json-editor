import { JSONResettable } from "./JSONResettable";
import { NumberResettable } from "./NumberResettable";

/**
 * A storage structure that allows the stored number to be reset and saved to a skin.json.
 */
export type NumberJSONResettable = NumberResettable & JSONResettable<number>;
