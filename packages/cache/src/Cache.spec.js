import unexpected from "unexpected";
import unexpectedSinon from "unexpected-sinon";
import sinon from "sinon";
import { Cache } from "./Cache.js";

const expect = unexpected.clone().use(unexpectedSinon);

describe("cache", () => {
  describe("constructor", () => {
    describe("when given no arguments", () => {
      it("creates an empty cache", () => {
        const cache = new Cache();
        expect(cache.get(), "to equal", {});
      });
    });

    describe("when given an object", () => {
      it("creates a cache with the given value as the data", () => {
        const cache = new Cache({
          global: { testing: "The state" },
        });

        expect(cache.get(), "to equal", {
          global: { testing: "The state" },
        });
      });
    });
  });

  describe("get", () => {
    const cache = new Cache({
      global: {
        numbers: [1, 2, 3],
        one: 1,
        two: 2,
        three: 3,
        entities: {
          todo: {
            42: {
              title: "Something to remember",
              text: "Lorem ipsum",
              meta: "meta",
            },
            666: {
              title: "Another",
              text: "also this",
              extra: "something extra",
            },
          },
        },
      },
    });

    const numbers = "global.numbers";

    const sumOfNumbers = {
      inputs: { numbers },
      compute: ({ numbers }) => numbers.reduce((sum, n) => sum + n, 0),
    };

    const averageOfNumbers = {
      inputs: { numbers, sum: sumOfNumbers },
      compute: ({ numbers, sum }) =>
        numbers.length === 0 ? NaN : sum / numbers.length,
    };

    describe("when given a path", () => {
      it("retrieves the value from the cache", () => {
        expect(cache.get(numbers), "to equal", [1, 2, 3]);
      });
    });

    describe("when given a computed", () => {
      it("retrieves the computed value from the cache", () => {
        expect(cache.get(averageOfNumbers), "to equal", 2);
      });
    });
  });

  describe("has", () => {
    const cache = new Cache({
      global: {
        numbers: [1, 2, 3],
      },
    });

    describe("when given a simple path", () => {
      it("returns true if the path matches the tree", () => {
        expect(cache.has("global.numbers"), "to be true");
      });

      it("returns false if the path does not match the tree", () => {
        expect(cache.has("numbers"), "to be false");
      });
    });

    describe("when given path with alternations", () => {
      it("returns true if the path matches the tree", () => {
        expect(cache.has("global.(numbers|nothing)"), "to be true");
      });

      it("returns false if the path does not match the tree", () => {
        expect(cache.has("global.(notthis|nothing)"), "to be false");
      });
    });

    describe("when given path with wildcards", () => {
      it("returns true if the path matches the tree", () => {
        expect(cache.has("global.*"), "to be true");
      });

      it("returns false if the path does not match the tree", () => {
        expect(cache.has("global.nothing.*"), "to be false");
      });
    });
  });

  describe("set", () => {
    it("sets the value at the given path", () => {
      const cache = new Cache({
        global: { testing: "Hello world" },
      });

      cache.set("global.testing", "Hello beautiful world");

      expect(cache.get(), "to equal", {
        global: { testing: "Hello beautiful world" },
      });
    });

    describe("when the path is just a string", () => {
      it("use the path as the first segment", () => {
        const cache = new Cache({
          global: { testing: "Hello world" },
        });

        cache.set("global", "Hello beautiful world");

        expect(cache.get(), "to equal", {
          global: "Hello beautiful world",
        });
      });
    });

    describe("when the given path doesn't exist", () => {
      it("creates the path", () => {
        const cache = new Cache({
          global: { testing: "The state" },
        });

        cache.set("global.new path", "This is new");

        expect(cache.get(), "to equal", {
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
      const cache = new Cache({
        global: { testing: "Hello world" },
      });

      cache.update("global.testing", (v) => v.toUpperCase());

      expect(cache.get(), "to equal", {
        global: { testing: "HELLO WORLD" },
      });
    });

    describe("when the given path doesn't exist", () => {
      it("creates the path", () => {
        const cache = new Cache({
          global: { testing: "The state" },
        });

        cache.update("global.new path", () => "This is new");

        expect(cache.get(), "to equal", {
          global: {
            testing: "The state",
            "new path": "This is new",
          },
        });
      });
    });
  });

  describe("remove", () => {
    it("removes the matching paths from the store", () => {
      const cache = new Cache({
        hereToStay: "Don't delete this",
        nested: {
          nested: {
            value: 42,
          },
          primitiveValue: true,
        },
      });

      cache.remove("nested.(nested|primitiveValue)");

      expect(cache.get(), "to equal", {
        hereToStay: "Don't delete this",
        nested: {},
      });
    });
  });

  describe("observe", () => {
    let cache, spy;

    beforeEach(() => {
      cache = new Cache({
        global: {
          numbers: [1, 2, 3],
          otherNumbers: [],
          sum: 1 + 2 + 3,
        },
      });

      spy = sinon.spy();
    });

    it("observers the entire cache when given no path", () => {
      cache.observe().subscribe(spy);

      cache.update("global", ({ numbers, sum }) => ({
        numbers: [...numbers, 4],
        sum: sum + 4,
      }));

      expect(cache.get(), "to equal", {
        global: {
          numbers: [1, 2, 3, 4],
          sum: 10,
        },
      });

      cache.notify();

      expect(spy, "to have calls satisfying", () => {
        spy({
          global: {
            numbers: [1, 2, 3, 4],
            sum: 10,
          },
        });
      });
    });

    it("observes the given path", () => {
      cache.observe("global.{numbers,otherNumbers}").subscribe(spy);

      cache.update("global", ({ numbers, otherNumbers, sum }) => ({
        numbers: [...numbers, 4],
        otherNumbers,
        sum: sum + 4,
      }));

      cache.update("global", ({ numbers, otherNumbers, sum }) => ({
        numbers,
        otherNumbers: [...otherNumbers, 5],
        sum: sum + 5,
      }));

      expect(cache.get(), "to equal", {
        global: {
          numbers: [1, 2, 3, 4],
          otherNumbers: [5],
          sum: 1 + 2 + 3 + 4 + 5,
        },
      });

      cache.notify();

      expect(spy, "to have calls satisfying", () => {
        spy({ numbers: [1, 2, 3, 4], otherNumbers: [5] });
      });
    });

    describe("when given an object", () => {
      it("observes all of the values", () => {
        cache
          .observe({
            numbers: "global.numbers",
            otherNumbers: "global.otherNumbers",
          })
          .subscribe(spy);

        cache.update("global", ({ numbers, otherNumbers, sum }) => ({
          numbers: [...numbers, 4],
          otherNumbers,
          sum: sum + 4,
        }));

        cache.update("global", ({ numbers, otherNumbers, sum }) => ({
          numbers,
          otherNumbers: [...otherNumbers, 5],
          sum: sum + 5,
        }));

        expect(cache.get(), "to equal", {
          global: {
            numbers: [1, 2, 3, 4],
            otherNumbers: [5],
            sum: 1 + 2 + 3 + 4 + 5,
          },
        });

        cache.notify();

        expect(spy, "to have calls satisfying", () => {
          spy({ numbers: [1, 2, 3, 4], otherNumbers: [5] });
        });
      });
    });

    describe("when the path doesn't exists and is created", () => {
      describe("and the path gets created after subscribing to it", () => {
        it("gets an update with the created value", () => {
          const observable = cache.observe({
            value: "not.defined.yet",
          });

          observable.subscribe(spy);

          expect(observable.value, "to equal", { value: undefined });

          cache.set("not.defined.yet", 42);

          expect(cache.get(), "to equal", {
            global: { numbers: [1, 2, 3], otherNumbers: [], sum: 6 },
            not: { defined: { yet: 42 } },
          });

          cache.notify();

          expect(spy, "to have calls satisfying", () => {
            spy({ value: 42 });
          });
        });
      });

      describe("and the path gets created before subscribing to it", () => {
        it("doesn't get an update but gets the updated initial value", () => {
          const observable = cache.observe({
            value: "not.defined.yet",
          });

          expect(observable.value, "to equal", { value: undefined });

          cache.set("not.defined.yet", 42);

          observable.subscribe(spy);

          expect(observable.value, "to equal", { value: 42 });

          expect(cache.get(), "to equal", {
            global: { numbers: [1, 2, 3], otherNumbers: [], sum: 6 },
            not: { defined: { yet: 42 } },
          });

          cache.notify();

          expect(spy, "was not called");
        });
      });
    });

    it("subscriptions doesn't fire if the observed path is not affected", () => {
      cache.observe("global.numbers").subscribe(spy);

      const average = (numbers) =>
        numbers.reduce((a, b) => a + b, 0) / numbers.length;

      cache.update("global.average", (_, cache) =>
        average(cache.get("global.numbers"))
      );

      expect(cache.get(), "to equal", {
        global: {
          numbers: [1, 2, 3],
          sum: 6,
          average: 2,
          otherNumbers: [],
        },
      });

      cache.notify();

      expect(spy, "was not called");
    });
  });

  describe("unsubscribe", () => {
    it("unsubscribes a subscription", () => {
      const cache = new Cache({
        global: {
          numbers: [1, 2, 3],
          sum: 6,
        },
      });

      const spy = sinon.spy();

      const subscription = cache.observe("global.numbers").subscribe(spy);

      cache.update("global", ({ numbers, sum }) => ({
        numbers: [...numbers, 4],
        sum: sum + 4,
      }));

      cache.notify();

      subscription.unsubscribe();

      cache.update("global", ({ numbers, sum }) => ({
        numbers: numbers.map((v) => v + 1),
        sum: sum + numbers.length,
      }));

      expect(cache.get(), "to equal", {
        global: {
          numbers: [2, 3, 4, 5],
          sum: 14,
        },
      });

      cache.notify();

      expect(spy, "to have calls satisfying", () => {
        spy([1, 2, 3, 4]);
      });
    });
  });
});
