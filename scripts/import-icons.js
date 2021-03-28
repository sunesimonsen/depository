const { join } = require("path");
const fs = require("fs").promises;
const { capitalCase } = require("change-case");
const {
  groupBy,
  map,
  forEach,
  program,
  sortBy,
  tap,
  toArray,
} = require("@transformation/core");
const { glob } = require("@transformation/glob");
const { readEachFile } = require("@transformation/file");
const { writeTemplate } = require("@transformation/ejs");

const source = "./node_modules/@zendeskgarden/svg-icons/src";
const dest = "./packages/components/src/icons";

program(
  glob({
    cwd: source,
    pattern: "*/*.svg",
    onlyFiles: false,
    absolute: true,
  }),
  readEachFile("utf8"),
  map(({ path, data }) => {
    const [size, fileName] = path.split("/").slice(-2);

    const name = capitalCase(fileName.replace(/\.svg$/, size + "Icon"))
      .replace(/ /g, "")
      .replace(/^\d/, "I$&");

    let style = "default";

    if (fileName.endsWith("-stroke.svg")) {
      style = "stroke";
    } else if (fileName.endsWith("-fill.svg")) {
      style = "fill";
    } else if (fileName.startsWith("wordmark-")) {
      style = "wordmark";
    }

    return {
      dir: dest,
      size,
      style,
      name,
      path: join(dest, `${name}.js`),
      data,
    };
  }),
  forEach(({ dir }) => fs.mkdir(dir, { recursive: true })),
  writeTemplate(join(__dirname, "SvgComponent.ejs"), ({ path }) => path),
  tap("path"),
  groupBy(({ size, style }) =>
    style === "default" ? `${size}px icons` : `${size}px icons (${style})`
  ),
  sortBy("key"),
  toArray(),
  writeTemplate(join(__dirname, "IconPreview.ejs"), ({ key }) =>
    join("docs", "components", "public", "pages", "icons", "index.js")
  )
);
