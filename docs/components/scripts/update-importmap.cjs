const path = require("path");
const fs = require("fs").promises;
const packageJson = require(path.join(__dirname, "..", "package.json"));
const dependencies = packageJson.dependencies;

const packageNames = [
  "stylewars",
  "@depository/store",
  "@depository/view",
  "@depository/components/icons/",
  "@depository/components",
];

const versions = Object.fromEntries(
  Object.entries(dependencies).filter(([name]) => packageNames.includes(name))
);

const importmap = {
  imports: {
    stylewars: `https://unpkg.com/stylewars@${versions.stylewars}/dist/bundle.esm.js`,
    "@depository/store": `https://unpkg.com/@depository/store@${versions["@depository/store"]}/dist/store.esm.js`,
    "@depository/view": `https://unpkg.com/@depository/view@${versions["@depository/view"]}/dist/view.esm.js`,
    "@depository/components/icons/": `https://unpkg.com/@depository/components@${versions["@depository/components"]}/src/icons/`,
    "@depository/components": `https://unpkg.com/@depository/components@${versions["@depository/components"]}/dist/components.esm.js`,
  },
};

const content = `\
export const importmap = \`${JSON.stringify(importmap, null, 2)}\`;
`;

fs.writeFile(path.join(__dirname, "..", "public", "importmap.js"), content);
