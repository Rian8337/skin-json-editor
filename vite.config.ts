import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@constants": resolve(__dirname, "src", "constants"),
            "@components": resolve(__dirname, "src", "components"),
            "@hooks": resolve(__dirname, "src", "hooks"),
            "@structures": resolve(__dirname, "src", "structures"),
            "@utils": resolve(__dirname, "src", "utils"),
        },
    },
    plugins: [react()],
    base: "/skin-json-editor/",
});
