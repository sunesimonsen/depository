import unexpected from "unexpected";
import unexpectedSnapshot from "unexpected-snapshot";
import { setIn } from "./setIn.js";

const expect = unexpected.clone().use(unexpectedSnapshot);

describe("setIn", () => {
  const data = {
    entities: {
      todo: {
        1: {
          title: "Outsider",
          text: "Lorem ipsum hapsum",
        },
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
        setIn(data, "entities.todo.42.title", "UPDATED"),
        "to equal snapshot",
        {
          entities: {
            todo: {
              1: { title: "Outsider", text: "Lorem ipsum hapsum" },
              42: {
                title: "UPDATED",
                text: "Lorem ipsum",
                meta: "meta",
                nested: { nested: { hidden: true } },
              },
              666: {
                title: "Another",
                text: "also this",
                extra: "something extra",
                nested: { nested: { hidden: false } },
              },
            },
          },
        }
      );
    });

    describe("that doesn't exists", () => {
      it("creates the path", () => {
        expect(
          setIn(data, "entities.todo.0.title", "UPDATED"),
          "to equal snapshot",
          {
            entities: {
              todo: {
                0: { title: "UPDATED" },
                1: { title: "Outsider", text: "Lorem ipsum hapsum" },
                42: {
                  title: "Something to remember",
                  text: "Lorem ipsum",
                  meta: "meta",
                  nested: { nested: { hidden: true } },
                },
                666: {
                  title: "Another",
                  text: "also this",
                  extra: "something extra",
                  nested: { nested: { hidden: false } },
                },
              },
            },
          }
        );
      });
    });
  });

  describe("on a path containing a wildcard", () => {
    it("returns a list of all of the matches", () => {
      expect(
        setIn(data, "entities.todo.*.title", "UPDATED"),
        "to equal snapshot",
        {
          entities: {
            todo: {
              1: { title: "UPDATED", text: "Lorem ipsum hapsum" },
              42: {
                title: "UPDATED",
                text: "Lorem ipsum",
                meta: "meta",
                nested: { nested: { hidden: true } },
              },
              666: {
                title: "UPDATED",
                text: "also this",
                extra: "something extra",
                nested: { nested: { hidden: false } },
              },
            },
          },
        }
      );
    });
  });

  describe("on a path containing alternations", () => {
    it("returns a list of all of the matches", () => {
      expect(
        setIn(data, "entities.todo.(42|666).title", "UPDATED"),
        "to equal snapshot",
        {
          entities: {
            todo: {
              1: { title: "Outsider", text: "Lorem ipsum hapsum" },
              42: {
                title: "UPDATED",
                text: "Lorem ipsum",
                meta: "meta",
                nested: { nested: { hidden: true } },
              },
              666: {
                title: "UPDATED",
                text: "also this",
                extra: "something extra",
                nested: { nested: { hidden: false } },
              },
            },
          },
        }
      );
    });
  });
});
