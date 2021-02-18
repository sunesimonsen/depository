import { parsePath } from "./parsePath.js";

import {
  fieldType,
  wildcardType,
  alternationType,
  collectorType,
  wildcardCollectorType,
} from "./Path.js";

const getSegmentsIn = (data, segments) => {
  if (segments.length === 0) return data;

  let current = data;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (!current || typeof current !== "object") {
      return undefined;
    }

    switch (segment._type) {
      case fieldType:
        if (segment._data in current) {
          current = current[segment._data];
        } else {
          return undefined;
        }
        break;

      case wildcardType:
        return Object.keys(current)
          .map((key) => getSegmentsIn(current[key], segments.slice(i + 1)))
          .filter((v) => typeof v !== "undefined");

      case alternationType:
        return segment._data
          .map((key) => getSegmentsIn(current[key], segments.slice(i + 1)))
          .filter((v) => typeof v !== "undefined");

      case collectorType:
        return segment._data.reduce((result, key) => {
          result[key] = getSegmentsIn(current[key], segments.slice(i + 1));
          return result;
        }, {});

      case wildcardCollectorType:
        return Object.keys(current).reduce((result, key) => {
          result[key] = getSegmentsIn(current[key], segments.slice(i + 1));
          return result;
        }, {});
    }
  }

  return current;
};

export const getIn = (data, path) => getSegmentsIn(data, parsePath(path)._data);
