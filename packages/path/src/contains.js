import { parsePath } from "./parsePath.js";
import { fieldType, wildcardType, alternationType } from "./Path.js";

const containSegments = (data, segments) => {
  if (segments.length === 0) return typeof data !== "undefined";

  let current = data;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (!current || typeof current !== "object") {
      return false;
    }

    switch (segment._type) {
      case fieldType:
        if (segment._data in current) {
          current = current[segment._data];
        } else {
          return false;
        }
        break;

      case wildcardType:
        return Object.keys(current).some((key) =>
          containSegments(current[key], segments.slice(i + 1))
        );

      case alternationType:
        return segment._data.some((key) =>
          containSegments(current[key], segments.slice(i + 1))
        );

      default:
        throw new Error(
          `Segment ${segment._type} is not supported by contains`
        );
    }
  }

  return true;
};

export const contains = (data, path) =>
  containSegments(data, parsePath(path)._data);
