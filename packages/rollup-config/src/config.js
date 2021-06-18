import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { importMetaAssets } from "@web/rollup-plugin-import-meta-assets";
import dynamicImportVariables from "rollup-plugin-dynamic-import-variables";
import { babel } from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "public/index.js",
    output: {
      dir: "dist",
      format: "esm",
    },
    preserveEntrySignatures: false,
    plugins: [
      copy({
        targets: [
          {
            src: "public/index.html",
            dest: "dist",
          },
          {
            src: "public/index.html",
            dest: "dist",
            rename: "200.html",
          },
          { src: "public/favicon.ico", dest: "dist" },
        ],
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
