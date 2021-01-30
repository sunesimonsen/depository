import unexpected from "unexpected";
import unexpectedSinon from "unexpected-sinon";
import sinon from "sinon";
import { Store } from "./Store.js";

const expect = unexpected.clone().use(unexpectedSinon);

describe("store", () => {
  describe("constructor", () => {
    describe("when given no arguments", () => {
      it("creates an empty store", () => {
        const store = new Store();
        expect(store.get(), "to equal", {});
      });
    });

    describe("when given an object", () => {
      it("creates a store with the given value as the data", () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        expect(store.get(), "to equal", {
          global: { testing: "The state" },
        });
      });
    });
  });

  describe("dispatch", () => {
    describe("when the action doesn't contain a path", () => {
      it("executes the given action against the entire store", async () => {
        const store = new Store({
          global: { testing: "The state" },
        });

        await store.dispatch({
          payload: (cache) => cache.get("global.testing").toUpperCase(),
          apply: (testing) => ({
            "global.testing": testing.toUpperCase(),
            "global.extra": "Fresh out of the gate",
          }),
        });

        expect(store.get(), "to equal", {
          global: { testing: "THE STATE", extra: "Fresh out of the gate" },
        });
      });
    });

    it("notify observers", async () => {
      const store = new Store({
        a: 0,
        b: 0,
        c: 42,
      });

      const bSpy = sinon.spy().named("b");
      const b = store.observe("b");
      b.subscribe(bSpy);

      const cSpy = sinon.spy().named("c");
      store.observe("c").subscribe(cSpy);

      const computedSpy = sinon.spy().named("multipy");
      const multipy = store.observe({
        inputs: { a: "a", b: "b" },
        compute: ({ a, b }) => a * b,
      });

      multipy.subscribe(computedSpy);

      await store.dispatch({
        apply: { a: 2, b: 4 },
      });

      expect(store.get(), "to equal", {
        a: 2,
        b: 4,
        c: 42,
      });

      expect([bSpy, cSpy, computedSpy], "to have calls satisfying", () => {
        bSpy(4);
        computedSpy(8);
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
    it("adds the given middleware to the dispatch chain", async () => {
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

      await store.dispatch({
        type: "upper-case",
        payload: (cache) => cache.get("global.testing").toUpperCase(),
        apply: (testing) => ({
          "global.testing": testing,
        }),
      });

      expect(store.get(), "to equal", {
        global: { testing: "THE STATE" },
      });

      expect(logger, "to have calls satisfying", () => {
        logger("dispatch", {
          type: "upper-case",
          extra: "stuff",
        });
      });
    });
  });

  ["get", "has", "observe"].forEach((method) => {
    it(`forwards ${method} to the cache`, () => {
      const store = new Store();

      sinon.stub(store.cache, method);
      const args = ["some", "arguments"];
      store[method](...args);
      expect(store.cache[method], "to have calls satisfying", () => {
        store.cache[method](...args);
      });
    });
  });
});
