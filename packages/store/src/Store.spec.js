const expect = require("unexpected").clone().use(require("unexpected-sinon"));
const sinon = require("sinon");
const Store = require("./Store");

describe("store", () => {
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
          apply: (store) => {
            store.update(["global", "testing"], (v) => v.toUpperCase());
          },
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
          path: ["global", "testing"],
          apply: (store) => {
            store.update((data) => data.toUpperCase());
          },
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
            path: ["global", "new path"],
            payload: "This is new",
            apply: (store, payload) => {
              store.set(payload);
            },
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

  describe("set", () => {
    it("sets the value at the given path", () => {
      const store = new Store({
        global: { testing: "Hello world" },
      });

      store.set(["global", "testing"], "Hello beautiful world");

      expect(store.data, "to equal", {
        global: { testing: "Hello beautiful world" },
      });
    });

    describe("when the path is just a string", () => {
      it("use the path as the first segment", () => {
        const store = new Store({
          global: { testing: "Hello world" },
        });

        store.set("global", "Hello beautiful world");

        expect(store.data, "to equal", {
          global: "Hello beautiful world",
        });
      });
    });

    describe("when the given path doesn't exist", () => {
      it("creates the path", () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        store.set(["global", "new path"], "This is new");

        expect(store.data, "to equal", {
          global: {
            testing: "The state",
            "new path": "This is new",
          },
        });
      });
    });
  });

  describe("update", () => {
    it("updates the value at the given path", () => {
      const store = new Store({
        global: { testing: "Hello world" },
      });

      store.update(["global", "testing"], (v) => v.toUpperCase());

      expect(store.data, "to equal", {
        global: { testing: "HELLO WORLD" },
      });
    });

    describe("when the given path doesn't exist", () => {
      it("creates the path", () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        store.update(["global", "new path"], () => "This is new");

        expect(store.data, "to equal", {
          global: {
            testing: "The state",
            "new path": "This is new",
          },
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

    describe("when only given a listener", () => {
      it("subscribes to changes of the entire store", () => {
        store.subscribe(spy);

        store.update(["global"], ({ numbers, sum }) => ({
          numbers: [...numbers, 4],
          sum: sum + 4,
        }));

        expect(store.data, "to equal", {
          global: {
            numbers: [1, 2, 3, 4],
            sum: 10,
          },
        });

        expect(spy, "to have calls satisfying", () => {
          spy(
            {
              global: {
                numbers: [1, 2, 3, 4],
                sum: 10,
              },
            },
            expect.it("to be a", Store)
          );
        });
      });
    });

    describe("when given a path and a listener", () => {
      it("subscribes to the given path", () => {
        store.subscribe(["global", "numbers"], spy);

        store.update(["global"], ({ numbers, sum }) => ({
          numbers: [...numbers, 4],
          sum: sum + 4,
        }));

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
    });

    it("doesn't fire if the subscribe path is not affected", () => {
      store.subscribe(["global", "numbers"], spy);

      const average = (numbers) =>
        numbers.reduce((a, b) => a + b, 0) / numbers.length;

      store.update(["global", "average"], (_, store) =>
        average(store.get(["global", "numbers"]))
      );

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

      store.update(["global"], ({ numbers, sum }) => ({
        numbers: [...numbers, 4],
        sum: sum + 4,
      }));

      subscription.unsubscribe();

      store.update(["global"], ({ numbers, sum }) => ({
        numbers: numbers.map((v) => v + 1),
        sum: sum + numbers.length,
      }));

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

  describe("use", () => {
    it("passes the store for modification by a plugin", () => {
      const testPlugin = (store) => (store.test = "We added this!");

      const store = new Store({
        global: { testing: "The state" },
      });

      store.use(testPlugin);

      expect(store.test, "to equal", "We added this!");
    });
  });

  describe("useMiddleware", () => {
    it("adds the given middleware to the dispatch chain", () => {
      const logger = sinon.spy();

      const store = new Store({
        global: { testing: "The state" },
      });

      store.useMiddleware(({ store, next, action }) => {
        logger("dispatch", action);

        return next(action);
      });

      store.useMiddleware(({ store, next, action }) => {
        const transformedAction = {
          extra: "stuff",
          ...action,
        };

        return next(transformedAction);
      });

      store.dispatch({
        name: "upper-case",
        path: ["global", "testing"],
        apply: (store) => {
          store.update((v) => v.toUpperCase());
        },
      });

      expect(store.data, "to equal", {
        global: { testing: "THE STATE" },
      });

      expect(logger, "to have calls satisfying", () => {
        logger("dispatch", {
          extra: "stuff",
          name: "upper-case",
          path: ["global", "testing"],
        });
      });
    });
  });

  describe("scoped", () => {
    it("returns a scoped store", () => {
      const store = new Store({
        global: { testing: "Hello world" },
      }).scoped("global");

      store.update("testing", (v) => v.toUpperCase());

      expect(store.get("testing"), "to equal", "HELLO WORLD");
    });

    it("supports subscribe", () => {
      const spy = sinon.spy();

      const store = new Store({
        global: { testing: "Hello world" },
      }).scoped("global");

      store.subscribe("testing", spy);

      store.set("testing", "Hello beautiful world");

      expect(store.get("testing"), "to equal", "Hello beautiful world");

      expect(spy, "to have calls satisfying", () => {
        spy("Hello beautiful world", expect.it("to be a", Store));
      });
    });

    it("supports get", () => {
      const store = new Store({
        global: { testing: "Hello world" },
      }).scoped("global");

      store.update("testing", (v) => v.toUpperCase());

      expect(store.get("testing"), "to equal", "HELLO WORLD");
    });

    it("supports set", () => {
      const store = new Store({
        global: { testing: "Hello world" },
      }).scoped("global");

      store.set("testing", "Hello beautiful world");

      expect(store.get("testing"), "to equal", "Hello beautiful world");
    });

    it("supports update", () => {
      const store = new Store({
        global: { testing: "Hello world" },
      }).scoped("global");

      store.update("testing", (v) => v.toUpperCase());

      expect(store.get("testing"), "to equal", "HELLO WORLD");
    });

    it("supports dispatch", () => {});

    it("supports scoping a scoped store", () => {
      const store = new Store({
        level1: { level2: { level3: "Hello world" } },
      })
        .scoped("level1")
        .scoped("level2");

      store.update("level3", (v) => v.toUpperCase());

      expect(store.get("level3"), "to equal", "HELLO WORLD");
    });
  });
});
