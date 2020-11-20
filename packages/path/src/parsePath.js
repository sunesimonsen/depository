const Path = require("./Path");
const Alternation = require("./Alternation");
const Collector = require("./Collector");
const Wildcard = require("./Wildcard");
const WildcardCollector = require("./WildcardCollector");
const Field = require("./Field");

const parsePath = (path) => {
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

        if (segment.match(/^[^\(\)\[\]\{\}.*]+$/)) {
          return new Field(segment);
        }

        const alternationMatch = segment.match(
          /^\(([^\(\)\[\]\{\}.*]+(\|[^\(\)\[\]\{\}.*]+)+)\)$/
        );
        if (alternationMatch) {
          return new Alternation(alternationMatch[1].split("|"));
        }

        const collectorMatch = segment.match(
          /^\{([^\(\)\[\]\{\}.*]+(,[^\(\)\[\]\{\}.*]+)+)\}$/
        );
        if (collectorMatch) {
          return new Collector(collectorMatch[1].split(","));
        }

        throw new Error(`Unsupported path segment ${segment} in path ${path}`);
      })
  );
};

module.exports = parsePath;
