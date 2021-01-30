import expect from "unexpected";
import { promiseMiddleware } from "./index.js";
import { Store } from "@depository/store";

const fakeApi = {
  async getTestValue() {
    return "From fake API";
  },
  async deadEnd() {
    throw new Error("Dead end!");
  },
};

describe("promise-middleware", () => {
  let store;
  beforeEach(() => {
    store = new Store();

    store.useMiddleware(promiseMiddleware(fakeApi));
  });

  it("resolves async function payloads", async () => {
    await store.dispatch({
      payload: async (cache, api) => {
        const response = await api.getTestValue();
        return { response };
      },
    });

    expect(store.get(), "to equal", {
      response: "From fake API",
    });
  });

  it("forwards promise rejections as the payload", async () => {
    await expect(
      () =>
        store.dispatch({
          payload: async (cache, api) => {
            const response = await api.deadEnd();
            return { response };
          },
        }),
      "to be rejected"
    );

    expect(store.get(), "to equal", {});
  });
});
