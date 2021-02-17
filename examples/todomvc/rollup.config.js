import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
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
                  '<script src="./bundle.min.js"></script>'
                ),
          },
        ],
      }),
      commonjs(),
      nodeResolve(),
      babel({ babelHelpers: "bundled" }),
      terser(),
    ],
  },
];
