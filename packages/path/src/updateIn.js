import { parsePath } from "./parsePath.js";

import { fieldType, wildcardType, alternationType } from "./Path.js";

const updateSegmentsIn = (data, segments, apply, defaultValue) => {
  if (segments.length === 0) {
    return apply(typeof data === "undefined" ? defaultValue : data);
  }

  const segment = segments[0];

  switch (segment._type) {
    case fieldType:
      return {
        ...data,
        [segment._data]: updateSegmentsIn(
          segment._data in data || segments.length === 1
            ? data[segment._data]
            : {},
          segments.slice(1),
          apply,
          defaultValue
        ),
      };

    case alternationType:
      return segment._data.reduce(
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

    case wildcardType:
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
      throw new Error(`Segment ${segment._type} is not supported by updateIn`);
  }
};

export const updateIn = (data, path, apply, defaultValue) =>
  updateSegmentsIn(data, parsePath(path)._data, apply, defaultValue);
