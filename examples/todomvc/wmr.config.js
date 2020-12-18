const htmlMinifier = require("rollup-plugin-html-minifier");
const { babel } = require("@rollup/plugin-babel");

module.exports = (config) => {
  if (config.mode === "build") {
    config.plugins.push(
      htmlMinifier({
        collapseWhitespace: true,
      }),
      babel({ babelHelpers: "bundled" })
    );
  }
};
