module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:import-x/recommended",
        "plugin:import-x/typescript",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "@typescript-eslint/no-empty-function": "off",
    },
    settings: {
        "import-x/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import-x/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
