import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/vseq.ts"],
    dts: true,
    clean: true,
    sourcemap: true,
    treeshake: true,
    minify: true,
    format: ["cjs", "esm", "esm"],
});