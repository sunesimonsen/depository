const expect = require("unexpected");
const Store = require(".");

describe("Store", () => {
  describe("constructor", () => {
    describe("when given no arguments", () => {
      it("creates an empty store", () => {
        const store = new Store();
        expect(store.data, "to equal", {});
      });
    });

    describe("when given an object", () => {
      it("creates a store with the given value as the data", () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        expect(store.data, "to equal", {
          global: { testing: "The state" },
        });
      });
    });
  });

  describe("dispatch", () => {
    describe("when the action doesn't contain a path", () => {
      it("executes the given action against the entire store", () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        store.dispatch({
          name: "upper-case",
          apply: (data) => ({
            global: {
              testing: data.global.testing.toUpperCase(),
            },
          }),
        });

        expect(store.data, "to equal", {
          global: { testing: "THE STATE" },
        });
      });
    });

    describe("when the action contain a path", () => {
      it("executes the given action against store at the given path", () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        store.dispatch({
          name: "upper-case",
          path: ["global", "testing"],
          apply: (data) => data.toUpperCase(),
        });

        expect(store.data, "to equal", {
          global: { testing: "THE STATE" },
        });
      });

      describe("when the given path doesn't exist", () => {
        it("creates the path", () => {
          const store = new Store({
            global: { testing: "The state" },
          });

          store.dispatch({
            name: "add-string",
            path: ["global", "new path"],
            apply: (data) => "This is new",
          });

          expect(store.data, "to equal", {
            global: {
              testing: "The state",
              "new path": "This is new",
            },
          });
        });
      });
    });
  });
});
