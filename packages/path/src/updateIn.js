import { parsePath } from "./parsePath";

const updateSegmentsIn = (data, segments, apply) => {
  if (segments.length === 0) {
    return apply(data);
  }

  const segment = segments[0];

  switch (segment.type) {
    case "field":
      return {
        ...data,
        [segment.name]: updateSegmentsIn(
          data[segment.name] || {},
          segments.slice(1),
          apply
        ),
      };

    case "alternation":
      return segment.names.reduce(
        (result, key) => {
          result[key] = updateSegmentsIn(data[key], segments.slice(1), apply);
          return result;
        },
        { ...data }
      );

    case "wildcard":
      return Object.keys(data).reduce((result, key) => {
        result[key] = updateSegmentsIn(data[key], segments.slice(1), apply);
        return result;
      }, {});

    default:
      throw new Error(`Segment ${segment.type} is not supported by updateIn`);
  }
};

export const updateIn = (data, path, apply) =>
  updateSegmentsIn(data, parsePath(path).segments, apply);
