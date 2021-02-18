import {
  fieldType,
  alternationType,
  collectorType,
  wildcardType,
  wildcardCollectorType,
} from "./Path.js";

import { parsePath } from "./parsePath.js";

const isSegmentsIntersecting = (aSegments, bSegments) => {
  const minLength = Math.min(aSegments.length, bSegments.length);

  for (let i = 0; i < minLength; i++) {
    const a = aSegments[i];
    const b = bSegments[i];

    if (
      a._type === wildcardType ||
      b._type === wildcardType ||
      a._type === wildcardCollectorType ||
      b._type === wildcardCollectorType
    ) {
      continue;
    }

    switch (`${a._type}:${b._type}`) {
      case `${fieldType}:${fieldType}`:
        if (a._data !== b._data) {
          return false;
        }
        break;

      case `${alternationType}:${alternationType}`:
      case `${collectorType}:${alternationType}`:
      case `${alternationType}:${collectorType}`:
      case `${collectorType}:${collectorType}`:
        if (a._data.every((name) => !b._data.includes(name))) {
          return false;
        }
        break;

      case `${alternationType}:${fieldType}`:
      case `${collectorType}:${fieldType}`:
        if (!a._data.includes(b._data)) {
          return false;
        }
        break;

      case `${fieldType}:${alternationType}`:
      case `${fieldType}:${collectorType}`:
        if (!b._data.includes(a._data)) {
          return false;
        }
        break;
    }
  }

  return true;
};

export const isPathsIntersecting = (aPath, bPath) =>
  isSegmentsIntersecting(parsePath(aPath)._data, parsePath(bPath)._data);
