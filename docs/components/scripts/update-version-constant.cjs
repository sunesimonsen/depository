const path = require("path");
const fs = require("fs").promises;
const { version } = require(path.join(__dirname, "..", "package.json"));

const content = `\
export const version = "${version}";
`;

fs.writeFile(path.join(__dirname, "..", "public", "version.js"), content);
