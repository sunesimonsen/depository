import htmlMinifier from "rollup-plugin-html-minifier";
import { babel } from "@rollup/plugin-babel";

export default (config) => {
  if (config.mode === "build") {
    config.plugins.push(
      htmlMinifier({
        collapseWhitespace: true,
      }),
      babel({ babelHelpers: "bundled" })
    );
  }
};
