const parsePath = require("./parsePath");

const getIn = (data, segments) => {
  if (segments.length === 0) return data;

  let current = data;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

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
          .map((key) => getIn(current[key], segments.slice(i + 1)))
          .filter((v) => typeof v !== "undefined");

      case "alternation":
        return segment.names
          .map((key) => getIn(current[key], segments.slice(i + 1)))
          .filter((v) => typeof v !== "undefined");

      case "collector":
        return segment.names.reduce((result, key) => {
          result[key] = getIn(current[key], segments.slice(i + 1));
          return result;
        }, {});

      case "wildcardCollector":
        return Object.keys(current).reduce((result, key) => {
          result[key] = getIn(current[key], segments.slice(i + 1));
          return result;
        }, {});
    }
  }

  return current;
};

module.exports = (data, path) => getIn(data, parsePath(path).segments);
