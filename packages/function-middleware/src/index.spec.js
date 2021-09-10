import expect from "unexpected";
import { functionMiddleware } from "./index.js";
import { Store } from "@depository/store";

const fakeApi = {
  async getTestValue() {
    return "From fake API";
  },
  async deadEnd() {
    throw new Error("Dead end!");
  },
};

describe("function-middleware", () => {
  let store;
  beforeEach(() => {
    store = new Store({
      count: 42,
    });

    store.useMiddleware(functionMiddleware(fakeApi));
  });

  describe("when the action has inputs", () => {
    it("provides the inputs to the payload method", () => {
      store.dispatch({
        inputs: { count: "count" },
        payload: ({ count }) => ({ count: count + 1 }),
      });

      expect(store.get(), "to equal", {
        count: 43,
      });
    });

    describe("and the payload is not a function", () => {
      it("the action is not processed by the middleware", () => {
        store.dispatch({
          inputs: { count: "count" },
          payload: { count: 13 },
        });

        expect(store.get(), "to equal", {
          count: 13,
        });
      });
    });

    describe("and the payload is async", () => {
      it("provides the inputs to the payload method", async () => {
        await store.dispatch({
          inputs: { count: "count" },
          payload: async ({ count }, api) => {
            const response = await api.getTestValue();
            return { count: count + 1, response };
          },
        });

        expect(store.get(), "to equal", {
          count: 43,
          response: "From fake API",
        });
      });
    });
  });

  describe("when the action doesn't have inputs", () => {
    describe("and the payload is a function", () => {
      it("the action is not processed by the middleware", () => {
        store.dispatch({
          payload: () => ({ count: 13 }),
        });

        expect(store.get(), "to equal", {
          count: 13,
        });
      });
    });

    describe("and the payload is not a function", () => {
      it("the action is not processed by the middleware", () => {
        store.dispatch({
          payload: { count: 13 },
        });

        expect(store.get(), "to equal", {
          count: 13,
        });
      });
    });
  });

  it("resolves async function payloads", async () => {
    await store.dispatch({
      payload: async (api) => {
        const response = await api.getTestValue();
        return { response };
      },
    });

    expect(store.get(), "to equal", {
      count: 42,
      response: "From fake API",
    });
  });

  it("forwards promise rejections as the payload", async () => {
    await expect(
      () =>
        store.dispatch({
          payload: async (api) => {
            const response = await api.deadEnd();
            return { response };
          },
        }),
      "to be rejected"
    );

    expect(store.get(), "to equal", { count: 42 });
  });
});
