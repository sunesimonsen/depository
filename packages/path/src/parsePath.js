import {
  createSegment,
  pathType,
  fieldType,
  alternationType,
  collectorType,
  wildcardType,
  wildcardCollectorType,
} from "./Path.js";

import { isPathObject } from "./isPathObject.js";

export const parsePath = (path) => {
  if (isPathObject(path)) return path;
  if (!path) return createSegment(pathType, []);

  return createSegment(
    pathType,
    path
      .split(".")
      .map((segment) => segment.trim())
      .map((segment) => {
        if (segment === "*") {
          return createSegment(wildcardType);
        }

        if (segment === "{*}") {
          return createSegment(wildcardCollectorType);
        }

        if (segment.match(/^[^()[\]{}.*]+$/)) {
          return createSegment(fieldType, segment);
        }

        const alternationMatch = segment.match(
          /^\(([^()[\]{}.*|,]+(\|[^()[\]{}.*|,]+)*)\)$/
        );
        if (alternationMatch) {
          return createSegment(alternationType, alternationMatch[1].split("|"));
        }

        const collectorMatch = segment.match(
          /^\{([^()[\]{}.*|,]+(,[^()[\]{}.*|,]+)*)\}$/
        );
        if (collectorMatch) {
          return createSegment(collectorType, collectorMatch[1].split(","));
        }

        throw new Error(`Unsupported path segment ${segment} in path ${path}`);
      })
  );
};
