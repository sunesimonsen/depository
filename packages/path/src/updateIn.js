import { parsePath } from "./parsePath.js";

const updateSegmentsIn = (data, segments, apply, defaultValue) => {
  if (segments.length === 0) {
    return apply(typeof data === "undefined" ? defaultValue : data);
  }

  const segment = segments[0];

  switch (segment.type) {
    case "field":
      return {
        ...data,
        [segment.name]: updateSegmentsIn(
          segment.name in data || segments.length === 1
            ? data[segment.name]
            : {},
          segments.slice(1),
          apply,
          defaultValue
        ),
      };

    case "alternation":
      return segment._names.reduce(
        (result, key) => {
          if (key in data) {
            result[key] = updateSegmentsIn(
              data[key],
              segments.slice(1),
              apply,
              defaultValue
            );
          }
          return result;
        },
        { ...data }
      );

    case "wildcard":
      return Object.keys(data).reduce((result, key) => {
        if (key in data) {
          result[key] = updateSegmentsIn(
            data[key],
            segments.slice(1),
            apply,
            defaultValue
          );
        }
        return result;
      }, {});

    default:
      throw new Error(`Segment ${segment.type} is not supported by updateIn`);
  }
};

export const updateIn = (data, path, apply, defaultValue) =>
  updateSegmentsIn(data, parsePath(path).segments, apply, defaultValue);
