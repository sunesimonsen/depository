import { parsePath } from "./parsePath.js";

const isSegmentsEqual = (aSegments, bSegments) => {
  if (aSegments === bSegments) return true;
  if (aSegments.length !== bSegments.length) return false;

  for (let i = 0; i < aSegments.length; i++) {
    let bNames;
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

        bNames = new Set(b.names);
        if (a.names.some((name) => !bNames.has(name))) {
          return false;
        }
        break;
    }
  }

  return true;
};

export const isPathsEqual = (aPath, bPath) =>
  isSegmentsEqual(parsePath(aPath).segments, parsePath(bPath).segments);
