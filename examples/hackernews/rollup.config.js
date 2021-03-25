import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { importMetaAssets } from "@web/rollup-plugin-import-meta-assets";
import { babel } from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "public/index.js",
    output: {
      file: "dist/bundle.min.js",
      format: "esm",
    },
    plugins: [
      copy({
        targets: [
          {
            src: "public/index.html",
            dest: "dist",
            transform: (contents) =>
              contents
                .toString()
                .replace(
                  '<script type="module" src="/index.js"></script>',
                  '<script type="module" src="/bundle.min.js"></script>'
                ),
          },
          { src: "public/favicon.ico", dest: "dist" },
        ],
      }),
      copy({
        targets: [
          {
            src: "dist/index.html",
            dest: "dist",
            rename: "200.html",
          },
        ],
      }),
      importMetaAssets(),
      commonjs(),
      nodeResolve(),
      babel({ babelHelpers: "bundled" }),
      terser({
        compress: false,
        mangle: {
          properties: {
            regex: /^_|^(onClick|onDblClick|onKeyUp|onKeyDown|onBlur|onChange|payload|dispatch|compute|computed|render)$/,
          },
        },
      }),
    ],
  },
];
