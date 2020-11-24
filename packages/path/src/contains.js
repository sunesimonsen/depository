const parsePath = require("./parsePath");

const contains = (data, segments) => {
  if (segments.length === 0) return typeof data !== "undefined";

  let current = data;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (!current || typeof current !== "object") {
      return false;
    }

    switch (segment.type) {
      case "field":
        if (segment.name in current) {
          current = current[segment.name];
        } else {
          return false;
        }
        break;

      case "wildcard":
        return Object.keys(current).some((key) =>
          contains(current[key], segments.slice(i + 1))
        );

      case "alternation":
        return segment.names.some((key) =>
          contains(current[key], segments.slice(i + 1))
        );

      default:
        throw new Error(`Segment ${segment.type} is not supported by contains`);
    }
  }

  return true;
};

module.exports = (data, path) => contains(data, parsePath(path).segments);
