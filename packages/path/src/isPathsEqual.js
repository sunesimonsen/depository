const parsePath = require("./parsePath");

const isPathsEqual = (aSegments, bSegments) => {
  if (aSegments === bSegments) return true;
  if (aSegments.length !== bSegments.length) return false;

  for (let i = 0; i < aSegments.length; i++) {
    const a = aSegments[i];
    const b = bSegments[i];

    if (a === b) continue;

    if (a.type !== b.type) return false;

    switch (a.type) {
      case "field":
        if (a.name !== b.name) return false;
        break;

      case "collector":
      case "alternation":
        if (a.names.length !== b.names.length) return false;

        const bNames = new Set(b.names);
        for (let j = 0; j < a.names.length; j++) {
          if (!bNames.has(a.names[j])) return false;
        }
        break;
    }
  }

  return true;
};

module.exports = (aPath, bPath) =>
  isPathsEqual(parsePath(aPath).segments, parsePath(bPath).segments);
