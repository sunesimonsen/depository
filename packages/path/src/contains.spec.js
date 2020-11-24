const expect = require("unexpected");
const contains = require("./contains");

describe("contains", () => {
  const data = {
    entities: {
      todo: {
        42: {
          title: "Something to remember",
          text: "Lorem ipsum",
          meta: "meta",
          nested: {
            nested: {
              hidden: true,
            },
          },
        },
        666: {
          title: "Another",
          text: "also this",
          extra: "something extra",
          nested: {
            nested: {
              hidden: false,
            },
          },
        },
      },
    },
  };

  describe("on a simple path", () => {
    it("returns true if the path exists", () => {
      expect(contains(data, "entities.todo.42.title"), "to be true");
    });

    it("returns false if the path does not exists", () => {
      expect(contains(data, "entities.todo.13.title"), "to be false");
    });
  });

  describe("on a path containing a wildcard", () => {
    it("returns true if there are any matches", () => {
      expect(contains(data, "entities.todo.*.title"), "to be true");
    });

    it("returns false if the path doesn't match", () => {
      expect(contains(data, "entities.todo.*.nothing"), "to be false");
    });
  });

  describe("on a path containing alternations", () => {
    it("returns a list of all of the matches", () => {
      expect(
        contains(data, "entities.todo.(42|666|nothing).title"),
        "to be true"
      );
    });

    it("returns false if the path doesn't match", () => {
      expect(
        contains(data, "entities.todo.(empty|nothing).title"),
        "to be false"
      );
    });
  });
});
