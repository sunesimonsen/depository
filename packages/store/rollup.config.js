import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const plugins = [commonjs(), nodeResolve()];
const minifyPlugins = [
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
      file: "dist/store.esm.js",
      format: "esm",
    },
    plugins,
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/store.esm.min.js",
      format: "esm",
    },
    plugins: plugins.concat(minifyPlugins),
  },
];
