import { Path } from "./Path.js";
import { Alternation } from "./Alternation.js";
import { Collector } from "./Collector.js";
import { Wildcard } from "./Wildcard.js";
import { WildcardCollector } from "./WildcardCollector.js";
import { Field } from "./Field.js";

export const parsePath = (path) => {
  if (path instanceof Path) return path;
  if (!path) return new Path([]);

  return new Path(
    path
      .split(".")
      .map((segment) => segment.trim())
      .map((segment) => {
        if (segment === "*") {
          return new Wildcard();
        }

        if (segment === "{*}") {
          return new WildcardCollector();
        }

        if (segment.match(/^[^()[\]{}.*]+$/)) {
          return new Field(segment);
        }

        const alternationMatch = segment.match(
          /^\(([^()[\]{}.*|,]+(\|[^()[\]{}.*|,]+)*)\)$/
        );
        if (alternationMatch) {
          return new Alternation(alternationMatch[1].split("|"));
        }

        const collectorMatch = segment.match(
          /^\{([^()[\]{}.*|,]+(,[^()[\]{}.*|,]+)*)\}$/
        );
        if (collectorMatch) {
          return new Collector(collectorMatch[1].split(","));
        }

        throw new Error(`Unsupported path segment ${segment} in path ${path}`);
      })
  );
};
