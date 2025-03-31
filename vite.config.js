import { resolve } from "path";

export default {
    root: resolve(__dirname, "src"),
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                about: resolve(__dirname, "src/about.html"),
            },
        },
        outDir: "../dist",
    },
};
