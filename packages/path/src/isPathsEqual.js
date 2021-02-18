import { parsePath } from "./parsePath.js";
import { fieldType, alternationType, collectorType } from "./Path.js";

const isSegmentsEqual = (aSegments, bSegments) => {
  if (aSegments === bSegments) return true;
  if (aSegments.length !== bSegments.length) return false;

  for (let i = 0; i < aSegments.length; i++) {
    let bNames;
    const a = aSegments[i];
    const b = bSegments[i];

    if (a === b) continue;

    if (a._type !== b._type) return false;

    switch (a._type) {
      case fieldType:
        if (a._data !== b._data) return false;
        break;

      case collectorType:
      case alternationType:
        if (a._data.length !== b._data.length) return false;

        bNames = new Set(b._data);
        if (a._data.some((name) => !bNames.has(name))) {
          return false;
        }
        break;
    }
  }

  return true;
};

export const isPathsEqual = (aPath, bPath) =>
  isSegmentsEqual(parsePath(aPath)._data, parsePath(bPath)._data);
