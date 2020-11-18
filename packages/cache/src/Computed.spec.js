const expect = require("unexpected").clone().use(require("unexpected-sinon"));
const sinon = require("sinon");
const Cache = require("./Cache");

describe("cache.computed", () => {
  let spy, cache, sumOfNumbers, averageOfNumbers;
  beforeEach(() => {
    spy = sinon.spy();

    cache = new Cache({
      global: { numbers: [1, 2, 3] },
    });

    sumOfNumbers = cache.computed({
      inputs: { numbers: ["global", "numbers"] },
      apply: ({ numbers }) => numbers.reduce((sum, n) => sum + n, 0),
    });

    averageOfNumbers = cache.computed({
      inputs: { numbers: ["global", "numbers"], sum: sumOfNumbers },
      apply: ({ numbers, sum }) =>
        numbers.length === 0 ? NaN : sum / numbers.length,
    });
  });

  it("returns a subscribable computed value", () => {
    sumOfNumbers.subscribe(spy);

    cache.update(["global", "numbers"], (numbers) => [...numbers, 4]);

    expect(cache.get(), "to equal", {
      global: { numbers: [1, 2, 3, 4] },
    });

    cache.notify();

    expect(sumOfNumbers.value, "to equal", 10);

    expect(spy, "to have calls satisfying", () => {
      spy(10);
    });
  });

  describe("when subscribed", () => {
    it("calculates the computed value", () => {
      sumOfNumbers.subscribe(spy);

      expect(sumOfNumbers.value, "to equal", 6);
    });

    it("doesn't fire if the subscribe path is not affected", () => {
      sumOfNumbers.subscribe(spy);

      cache.set(["global", "other"], "New stuff");

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3], other: "New stuff" },
      });

      expect(sumOfNumbers.value, "to equal", 6);

      expect(spy, "was not called");
    });

    it("doesn't fire if the value didn't change", () => {
      sumOfNumbers.subscribe(spy);

      cache.update(["global", "numbers"], (numbers) =>
        numbers.slice().reverse()
      );

      expect(cache.get(), "to equal", {
        global: { numbers: [3, 2, 1] },
      });

      expect(sumOfNumbers.value, "to equal", 6);

      expect(spy, "was not called");
    });
  });

  describe("when unsubscribed", () => {
    it("stops notifying the listeners", () => {
      const subscription = sumOfNumbers.subscribe(spy);

      subscription.unsubscribe();

      cache.update(["global", "numbers"], (numbers) => [...numbers, 4]);

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      expect(sumOfNumbers.value, "to equal", 6);

      expect(spy, "was not called");
    });
  });

  describe("when combining computed inputs and cache paths", () => {
    it("re-calculates the value when one of the inputs changes", () => {
      averageOfNumbers.subscribe(spy);

      expect(averageOfNumbers.value, "to equal", 2);

      cache.update(["global", "numbers"], (numbers) => [...numbers, 4]);

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      cache.notify();

      expect(averageOfNumbers.value, "to equal", 2.5);

      expect(spy, "to have calls satisfying", () => {
        spy(2.5);
      });
    });

    describe("and unsubscribing", () => {
      it("stops emitting updates", () => {
        const subscription = averageOfNumbers.subscribe(spy);

        expect(averageOfNumbers.value, "to equal", 2);

        subscription.unsubscribe();

        cache.update(["global", "numbers"], (numbers) => [...numbers, 4]);

        expect(cache.get(), "to equal", {
          global: { numbers: [1, 2, 3, 4] },
        });

        expect(averageOfNumbers.value, "to equal", 2);

        expect(spy, "was not called");
      });
    });
  });

  describe("waitFor", () => {
    it("returns a promise for when the given condition is true value of the computed", async () => {
      const cache = new Cache({
        global: { numbers: [1, 2, 3] },
      });

      const sumOfNumbers = cache.computed({
        inputs: { numbers: ["global", "numbers"] },
        apply: ({ numbers }) => numbers.reduce((sum, n) => sum + n, 0),
      });

      setTimeout(() => {
        cache.update(["global", "numbers"], (numbers) => [...numbers, 4]);
        cache.notify();
      }, 1);

      await sumOfNumbers.waitFor((n) => n === 10);

      expect(cache.get(), "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });
    });
  });
});
