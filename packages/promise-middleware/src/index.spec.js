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

  it("resolve promise payloads", async () => {
    await store.dispatch({
      payload: fakeApi.getTestValue(),
      apply: (response) => ({
        response,
      }),
    });

    expect(store.get(), "to equal", {
      response: "From fake API",
    });
  });

  it("resolves async function payloads", async () => {
    await store.dispatch({
      payload: (cache, api) => api.getTestValue(),
      apply: (response) => ({
        response,
      }),
    });

    expect(store.get(), "to equal", {
      response: "From fake API",
    });
  });

  it("forwards promise rejections as the payload", async () => {
    await store.dispatch({
      payload: (cache, api) => api.deadEnd(),
      apply: (response, { error }) => {
        return error ? { error: error.message } : { response };
      },
    });

    expect(store.get(), "to equal", {
      error: "Dead end!",
    });
  });
});
