import unexpected from "unexpected";
import unexpectedSnapshot from "unexpected-snapshot";
import { updateIn } from "./updateIn.js";

const expect = unexpected.clone().use(unexpectedSnapshot);

describe("updateIn", () => {
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
        updateIn(data, "entities.todo.42.title", (s) => s.toUpperCase()),
        "to equal snapshot",
        {
          entities: {
            todo: {
              1: { title: "Outsider", text: "Lorem ipsum hapsum" },
              42: {
                title: "SOMETHING TO REMEMBER",
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
          updateIn(data, "entities.todo.0.title", () => "UPDATED"),
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

      describe("when a default value is given", () => {
        it("apply the function to the default value", () => {
          expect(
            updateIn(data, "global.foo.bar.baz.counter", (v) => v + 1, 0),
            "to equal snapshot",
            {
              entities: {
                todo: {
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
              global: {
                foo: { bar: { baz: { counter: 1 } } },
              },
            }
          );
        });
      });
    });
  });

  describe("on a path containing a wildcard", () => {
    it("returns a list of all of the matches", () => {
      expect(
        updateIn(data, "entities.todo.*.title", (s) => s.toUpperCase()),
        "to equal snapshot",
        {
          entities: {
            todo: {
              1: { title: "OUTSIDER", text: "Lorem ipsum hapsum" },
              42: {
                title: "SOMETHING TO REMEMBER",
                text: "Lorem ipsum",
                meta: "meta",
                nested: { nested: { hidden: true } },
              },
              666: {
                title: "ANOTHER",
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
        updateIn(data, "entities.todo.(42|666).title", (s) => s.toUpperCase()),
        "to equal snapshot",
        {
          entities: {
            todo: {
              1: { title: "Outsider", text: "Lorem ipsum hapsum" },
              42: {
                title: "SOMETHING TO REMEMBER",
                text: "Lorem ipsum",
                meta: "meta",
                nested: { nested: { hidden: true } },
              },
              666: {
                title: "ANOTHER",
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
