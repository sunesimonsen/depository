import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const plugins = [nodeResolve()];
const minifyPlugins = [
  babel({
    rootMode: "upward",
    babelHelpers: "bundled",
  }),
  terser({
    compress: true,
    mangle: {
      reserved: [],
      properties: {
        regex: /^_/,
      },
    },
  }),
];

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/styleguide.esm.js",
      format: "esm",
    },
    external: ["@depository/view", "stylewars"],
    plugins,
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/styleguide.esm.min.js",
      format: "esm",
    },
    external: ["stylewars"],
    plugins: plugins.concat(minifyPlugins),
  },
];
