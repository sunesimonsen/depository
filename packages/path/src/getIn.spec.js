import unexpected from "unexpected";
import unexpectedSnapshot from "unexpected-snapshot";
import { getIn } from "./getIn";

const expect = unexpected.clone().use(unexpectedSnapshot);

describe("getIn", () => {
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
    it("retrieves the value the path is pointing to", () => {
      expect(
        getIn(data, "entities.todo.42.title"),
        "to equal snapshot",
        "Something to remember"
      );
    });
  });

  describe("on a path containing a wildcard", () => {
    it("returns a list of all of the matches", () => {
      expect(getIn(data, "entities.todo.*.title"), "to equal snapshot", [
        "Something to remember",
        "Another",
      ]);
    });

    it("can be combined with collectors", () => {
      expect(getIn(data, "entities.todo.*.{title,text}"), "to equal snapshot", [
        { title: "Something to remember", text: "Lorem ipsum" },
        { title: "Another", text: "also this" },
      ]);
    });
  });

  describe("on a path containing alternations", () => {
    it("returns a list of all of the matches", () => {
      expect(
        getIn(data, "entities.todo.(42|666|nothing).title"),
        "to equal snapshot",
        ["Something to remember", "Another"]
      );
    });

    it("can be combined with collectors", () => {
      expect(
        getIn(data, "entities.todo.(42|666).{title,text}"),
        "to equal snapshot",
        [
          { title: "Something to remember", text: "Lorem ipsum" },
          { title: "Another", text: "also this" },
        ]
      );
    });
  });

  describe("on a path ending with a collector", () => {
    it("returns all of the fields of the collector", () => {
      expect(
        getIn(data, "entities.todo.42.{title,text}"),
        "to equal snapshot",
        { title: "Something to remember", text: "Lorem ipsum" }
      );
    });
  });

  describe("on a path containing a collector", () => {
    it("returns all of the fields of the collector", () => {
      expect(
        getIn(data, "entities.todo.{666,42,nothing}.{title,text}"),
        "to equal snapshot",
        {
          42: { title: "Something to remember", text: "Lorem ipsum" },
          666: { title: "Another", text: "also this" },
        }
      );
    });
  });

  describe("on a path containing a wildcard collector", () => {
    it("returns all of the fields of the collector", () => {
      expect(
        getIn(data, "entities.todo.{*}.{title,text,maybe}"),
        "to equal snapshot",
        {
          42: { title: "Something to remember", text: "Lorem ipsum" },
          666: { title: "Another", text: "also this" },
        }
      );
    });
  });
});
