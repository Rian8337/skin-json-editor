/**
 * Represents a skin.ini.
 */
export class SkinIni {
    private readonly sections = new Map<string, Map<string, string>>();

    /**
     * Creates a new `SkinIni`.
     *
     * @param str The skin.ini to parse.
     */
    constructor(str: string) {
        let currentSection: Map<string, string> | undefined;

        for (let line of str.split("\n")) {
            line = line.trim();

            if (!line || line.startsWith("//")) {
                continue;
            }

            if (line.startsWith("[") && line.endsWith("]")) {
                const sectionName = line.slice(1, -1);

                currentSection = this.sections.get(sectionName);

                if (!currentSection) {
                    currentSection = new Map();
                    this.sections.set(sectionName, currentSection);
                }

                continue;
            }

            const split = line.split(":");

            const propertyName = split[0].trim();
            const value = split.slice(1).join(":").trim();

            currentSection?.set(propertyName, value);
        }
    }

    /**
     * Gets a value from the skin.ini.
     *
     * @param section The section of the value.
     * @param property The property of the value.
     */
    get(section: string, property: string): string | undefined {
        return this.sections.get(section)?.get(property);
    }
}
