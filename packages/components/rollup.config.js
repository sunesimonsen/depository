import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const plugins = [nodeResolve()];
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
      file: "dist/components.esm.js",
      format: "esm",
    },
    external: ["@depository/view", "stylewars"],
    plugins,
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/components.esm.min.js",
      format: "esm",
    },
    plugins: plugins.concat(minifyPlugins),
  },
];
