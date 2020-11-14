const expect = require("unexpected").clone().use(require("unexpected-sinon"));
const sinon = require("sinon");
const Store = require("@depository/store");
const Computed = require(".");

describe("computed", () => {
  let clock, spy, store, sumOfNumbers, averageOfNumbers;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
    spy = sinon.spy();

    store = new Store({
      global: { numbers: [1, 2, 3] },
    });

    sumOfNumbers = new Computed({
      store,
      inputs: { numbers: ["global", "numbers"] },
      apply: ({ numbers }) => numbers.reduce((sum, n) => sum + n, 0),
    });

    averageOfNumbers = new Computed({
      store,
      inputs: { numbers: ["global", "numbers"], sum: sumOfNumbers },
      apply: ({ numbers, sum }) =>
        numbers.length === 0 ? NaN : sum / numbers.length,
    });
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns a subscribable computed value", () => {
    sumOfNumbers.subscribe(spy);

    store.dispatch({
      path: ["global", "numbers"],
      apply: (numbers) => [...numbers, 4],
    });

    expect(store.data, "to equal", {
      global: { numbers: [1, 2, 3, 4] },
    });

    clock.tick(0);

    expect(sumOfNumbers.value, "to equal", 10);

    expect(spy, "to have calls satisfying", () => {
      spy(10, expect.it("to be a", Store));
    });
  });

  describe("when subscribed", () => {
    it("calculates the computed value", () => {
      sumOfNumbers.subscribe(spy);

      expect(sumOfNumbers.value, "to equal", 6);
    });

    it("doesn't fire if the subscribe path is not affected", () => {
      sumOfNumbers.subscribe(spy);

      store.dispatch({
        path: ["global", "other"],
        apply: (_) => "New stuff",
      });

      expect(store.data, "to equal", {
        global: { numbers: [1, 2, 3], other: "New stuff" },
      });

      clock.tick(0);

      expect(sumOfNumbers.value, "to equal", 6);

      expect(spy, "was not called");
    });

    it("doesn't fire if the value didn't change", () => {
      sumOfNumbers.subscribe(spy);

      store.dispatch({
        path: ["global", "numbers"],
        apply: (numbers) => numbers.slice().reverse(),
      });

      expect(store.data, "to equal", {
        global: { numbers: [3, 2, 1] },
      });

      clock.tick(0);

      expect(sumOfNumbers.value, "to equal", 6);

      expect(spy, "was not called");
    });
  });

  describe("when unsubscribed", () => {
    it("stops notifying the listeners", () => {
      const subscription = sumOfNumbers.subscribe(spy);

      subscription.unsubscribe();

      store.dispatch({
        path: ["global", "numbers"],
        apply: (numbers) => [...numbers, 4],
      });

      expect(store.data, "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      expect(sumOfNumbers.value, "to equal", 6);

      expect(spy, "was not called");
    });
  });

  describe("when combining computed inputs and store paths", () => {
    it("re-calculates the value when one of the inputs changes", () => {
      averageOfNumbers.subscribe(spy);

      expect(averageOfNumbers.value, "to equal", 2);

      store.dispatch({
        path: ["global", "numbers"],
        apply: (numbers) => [...numbers, 4],
      });

      expect(store.data, "to equal", {
        global: { numbers: [1, 2, 3, 4] },
      });

      clock.tick(0);

      expect(averageOfNumbers.value, "to equal", 2.5);

      expect(spy, "to have calls satisfying", () => {
        spy(2.5, expect.it("to be a", Store));
      });
    });

    describe("and unsubscribing", () => {
      it("stops emitting updates", () => {
        const subscription = averageOfNumbers.subscribe(spy);

        expect(averageOfNumbers.value, "to equal", 2);

        subscription.unsubscribe();

        store.dispatch({
          path: ["global", "numbers"],
          apply: (numbers) => [...numbers, 4],
        });

        expect(store.data, "to equal", {
          global: { numbers: [1, 2, 3, 4] },
        });

        clock.tick(0);

        expect(averageOfNumbers.value, "to equal", 2);

        expect(spy, "was not called");
      });
    });
  });
});
