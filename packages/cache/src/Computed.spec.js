import unexpected from "unexpected";
import unexpectedSinon from "unexpected-sinon";
import sinon from "sinon";
import { Cache } from "./Cache.js";

const expect = unexpected.clone().use(unexpectedSinon);

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

const oddNumbers = {
  inputs: { numbers },
  compute: ({ numbers }) => numbers.filter((n) => n % 2 === 1),
};

const oddNumbersStrictEquality = {
  inputs: { numbers },
  compute: ({ numbers }) => numbers.filter((n) => n % 2 === 1),
  isEqual: Object.is,
};

describe("cache.computed", () => {
  let spy, cache, sum, average, odd, strictOdd;
  beforeEach(() => {
    spy = sinon.spy();

    cache = new Cache({
      global: { numbers: [1, 2, 3] },
    });

    sum = cache.observe(sumOfNumbers);
    average = cache.observe(averageOfNumbers);
    odd = cache.observe(oddNumbers);
    strictOdd = cache.observe(oddNumbersStrictEquality);
  });

  it("returns a subscribable computed value", () => {
    sum.subscribe(spy);

    cache.update("global.numbers", (numbers) => [...numbers, 4]);

    expect(cache.get(), "to equal", {
      global: { numbers: [1, 2, 3, 4] },
    });

    cache.notify();

    expect(sum.value, "to equal", 10);

    expect(spy, "to have calls satisfying", () => {
      spy(10);
    });
  });

  describe("when observing the same path that is already subscribed", () => {
    it("returns the active observer", () => {
      const a = cache.observe("some.thing");
      a.subscribe(spy);
      const b = cache.observe("some.thing");

      expect(a, "to be", b);
    });
  });

  describe("when observing computed that is already subscribed", () => {
    it("returns the active observer", () => {
      const sum = {
        inputs: { a: "a", b: "b" },
        compute: ({ a, b }) => a + b,
      };

      const a = cache.observe(sum);
      a.subscribe(spy);
      const b = cache.observe(sum);

      expect(a, "to be", b);
    });
  });

  describe("when subscribed", () => {
    it("calculates the computed value", () => {
      sum.subscribe(spy);

      expect(sum.value, "to equal", 6);
    });

    it("doesn't fire if the subscribe path is not affected", () => {
      sum.subscribe(spy);

      cache.set("global.other", "New stuff");

      cache.notify();

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3], other: "New stuff" },
      });

      expect(sum.value, "to equal", 6);

      expect(spy, "was not called");
    });

    it("doesn't fire if the value didn't change", () => {
      sum.subscribe(spy);

      cache.update("global.numbers", (numbers) => numbers.slice().reverse());

      cache.notify();

      expect(cache.get(), "to equal", {
        global: { numbers: [3, 2, 1] },
      });

      expect(sum.value, "to equal", 6);

      expect(spy, "was not called");
    });

    it("uses shallow equal by default to determine if the value has changed", () => {
      odd.subscribe(spy);

      cache.update("global.numbers", (numbers) => [...numbers, 4]);

      cache.notify();

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      expect(odd.value, "to equal", [1, 3]);

      expect(spy, "was not called");
    });

    it("allows you to override the value equality check", () => {
      strictOdd.subscribe(spy);

      cache.update("global.numbers", (numbers) => [...numbers, 4]);

      cache.notify();

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      expect(strictOdd.value, "to equal", [1, 3]);

      expect(spy, "to have calls satisfying", () => {
        spy([1, 3]);
      });
    });
  });

  describe("when unsubscribed", () => {
    it("stops notifying the listeners", () => {
      const subscription = sum.subscribe(spy);

      subscription.unsubscribe();

      cache.update("global.numbers", (numbers) => [...numbers, 4]);

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      expect(sum.value, "to equal", 6);

      expect(spy, "was not called");
    });
  });

  describe("when combining computed inputs and cache paths", () => {
    it("re-calculates the value when one of the inputs changes", () => {
      average.subscribe(spy);

      expect(average.value, "to equal", 2);

      cache.update("global.numbers", (numbers) => [...numbers, 4]);

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      cache.notify();

      expect(average.value, "to equal", 2.5);

      expect(spy, "to have calls satisfying", () => {
        spy(2.5);
      });
    });

    describe("and unsubscribing", () => {
      it("stops emitting updates", () => {
        const subscription = average.subscribe(spy);

        expect(average.value, "to equal", 2);

        subscription.unsubscribe();

        cache.update("global.numbers", (numbers) => [...numbers, 4]);

        expect(cache.get(), "to equal", {
          global: { numbers: [1, 2, 3, 4] },
        });

        expect(average.value, "to equal", 2);

        expect(spy, "was not called");
      });
    });
  });

  describe("waitFor", () => {
    it("returns a promise for when the given condition is true value of the computed", async () => {
      setTimeout(() => {
        cache.update("global.numbers", (numbers) => [...numbers, 4]);
        cache.notify();
      }, 1);

      await sum.waitFor((n) => n === 10);

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });
    });
  });
});
