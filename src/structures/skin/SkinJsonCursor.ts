/**
 * Represents the `Cursor` section of skin.json.
 */
export interface SkinJsonCursor {
    /**
     * Whether the cursor rotates when present. Defaults to `true`.
     */
    rotateCursor?: boolean;

    /**
     * Whether the cursor trail's rotation follows the cursor rotation when spawned. Defaults to `true`.
     */
    rotateCursorTrail?: boolean;
}
