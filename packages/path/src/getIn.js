import { parsePath } from "./parsePath";

const getSegmentsIn = (data, segments) => {
  if (segments.length === 0) return data;

  let current = data;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (!current || typeof current !== "object") {
      return undefined;
    }

    switch (segment.type) {
      case "field":
        if (segment.name in current) {
          current = current[segment.name];
        } else {
          return undefined;
        }
        break;

      case "wildcard":
        return Object.keys(current)
          .map((key) => getSegmentsIn(current[key], segments.slice(i + 1)))
          .filter((v) => typeof v !== "undefined");

      case "alternation":
        return segment.names
          .map((key) => getSegmentsIn(current[key], segments.slice(i + 1)))
          .filter((v) => typeof v !== "undefined");

      case "collector":
        return segment.names.reduce((result, key) => {
          result[key] = getSegmentsIn(current[key], segments.slice(i + 1));
          return result;
        }, {});

      case "wildcardCollector":
        return Object.keys(current).reduce((result, key) => {
          result[key] = getSegmentsIn(current[key], segments.slice(i + 1));
          return result;
        }, {});
    }
  }

  return current;
};

export const getIn = (data, path) =>
  getSegmentsIn(data, parsePath(path).segments);
