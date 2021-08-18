import html from "@web/rollup-plugin-html";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { importMetaAssets } from "@web/rollup-plugin-import-meta-assets";
import dynamicImportVariables from "rollup-plugin-dynamic-import-variables";
import { babel } from "@rollup/plugin-babel";

export default [
  {
    input: "public/*.html",
    output: {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name]-[hash].js",
    },
    preserveEntrySignatures: false,
    plugins: [
      html({
        publicPath: "/",
        minify: true,
      }),
      dynamicImportVariables(),
      importMetaAssets(),
      nodeResolve(),
      babel({ babelHelpers: "bundled" }),
      terser({
        compress: false,
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
      }),
    ],
  },
];
