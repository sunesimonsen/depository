const expect = require("unexpected").clone().use(require("unexpected-sinon"));
const sinon = require("sinon");
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

  describe("subscribe", () => {
    let store, spy;

    beforeEach(() => {
      store = new Store({
        global: {
          numbers: [1, 2, 3],
          sum: 6,
        },
      });

      spy = sinon.spy();
    });

    it("subscribes to the given path", () => {
      store.subscribe(["global", "numbers"], spy);

      store.dispatch({
        name: "append-4",
        path: ["global"],
        apply: ({ numbers, sum }) => ({
          numbers: [...numbers, 4],
          sum: sum + 4,
        }),
      });

      expect(store.data, "to equal", {
        global: {
          numbers: [1, 2, 3, 4],
          sum: 10,
        },
      });

      expect(spy, "to have calls satisfying", () => {
        spy([1, 2, 3, 4], expect.it("to be a", Store));
      });
    });

    it("doesn't fire if the subscribe path is not affected", () => {
      store.subscribe(["global", "numbers"], spy);

      const average = (numbers) =>
        numbers.reduce((a, b) => a + b, 0) / numbers.length;

      store.dispatch({
        name: "append-average",
        path: ["global", "average"],
        apply: (_, store) => average(store.get(["global", "numbers"])),
      });

      expect(store.data, "to equal", {
        global: {
          numbers: [1, 2, 3],
          sum: 6,
          average: 2,
        },
      });

      expect(spy, "was not called");
    });
  });

  describe("unsubscribe", () => {
    it("unsubscribes a subscription", () => {
      const store = new Store({
        global: {
          numbers: [1, 2, 3],
          sum: 6,
        },
      });

      const spy = sinon.spy();

      const subscription = store.subscribe(["global", "numbers"], spy);

      store.dispatch({
        name: "append-4",
        path: ["global"],
        apply: ({ numbers, sum }) => ({
          numbers: [...numbers, 4],
          sum: sum + 4,
        }),
      });

      subscription.unsubscribe();

      store.dispatch({
        name: "increment-by-1",
        path: ["global"],
        apply: ({ numbers, sum }) => ({
          numbers: numbers.map((v) => v + 1),
          sum: sum + numbers.length,
        }),
      });

      expect(store.data, "to equal", {
        global: {
          numbers: [2, 3, 4, 5],
          sum: 14,
        },
      });

      expect(spy, "to have calls satisfying", () => {
        spy([1, 2, 3, 4], expect.it("to be a", Store));
      });
    });
  });
});
