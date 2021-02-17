import { parsePath } from "./parsePath.js";

const isSegmentsIntersecting = (aSegments, bSegments) => {
  const minLength = Math.min(aSegments.length, bSegments.length);

  for (let i = 0; i < minLength; i++) {
    const a = aSegments[i];
    const b = bSegments[i];

    if (
      a.type === "wildcard" ||
      b.type === "wildcard" ||
      a.type === "wildcardCollector" ||
      b.type === "wildcardCollector"
    ) {
      continue;
    }

    switch (`${a.type}:${b.type}`) {
      case "field:field":
        if (a.name !== b.name) {
          return false;
        }
        break;

      case "alternation:alternation":
      case "collector:alternation":
      case "alternation:collector":
      case "collector:collector":
        if (a._names.every((name) => !b._names.includes(name))) {
          return false;
        }
        break;

      case "alternation:field":
      case "collector:field":
        if (!a._names.includes(b.name)) {
          return false;
        }
        break;

      case "field:alternation":
      case "field:collector":
        if (!b._names.includes(a.name)) {
          return false;
        }
        break;
    }
  }

  return true;
};

export const isPathsIntersecting = (aPath, bPath) =>
  isSegmentsIntersecting(parsePath(aPath).segments, parsePath(bPath).segments);
