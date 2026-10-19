import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default {
    root: resolve(__dirname, "src"),
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            sass: {
                // Bootstrap gebruikt nog het oude @import; deze meldingen zijn ruis.
                quietDeps: true,
                silenceDeprecations: ["import", "global-builtin", "color-functions", "mixed-decls"],
            },
        },
    },
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
};
