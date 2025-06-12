import { SingleColorEditor } from "@components/editors";
import { ThemeAccentColorContext } from "@hooks/Theme";
import { useContext } from "react";

export default function ThemeAccentColor() {
    const ctx = useContext(ThemeAccentColorContext);

    return (
        <SingleColorEditor
            title="Accent Color"
            resettable={ctx}
            description="The accent color of the theme, used for highlights and important elements."
        />
    );
}
