import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig([
    {
        input: "src/index.ts",
        output: {
            dir: "dist",
            format: "es",
            name: "bsf-admin-ui",
        },
        external: ["react", "react-dom", "@emotion/css"],
        plugins: [
            typescript({
                tsconfig: "tsconfig.json",
            }),
        ],
    },
    {
        input: "src/components.ts",
        output: {
            dir: "dist",
            format: "es",
            name: "bsf-admin-ui",
        },
        external: ["react", "react-dom", "@emotion/css", "quill", "quill-mention"],
        plugins: [
            typescript({
                tsconfig: "tsconfig.json",
            }),
            resolve(),
            commonjs({
              namedExports: {
                'hoist-non-react-statics': ['default'] // Explicitly specify the default export for hoist-non-react-statics
              }
            }),
            postcss({
              inject: true, // Injects CSS into the JS bundle
              minimize: true, // Minimizes CSS
              extensions: [".css"],
            })
        ],
    },
    {
        input: "src/settings.ts",
        output: {
            dir: "dist",
            format: "es",
            name: "bsf-admin-ui",
        },
        external: ["react", "react-dom", "@emotion/css"],
        plugins: [
            typescript({
                tsconfig: "tsconfig.json",
            }),
        ],
    },
]);
