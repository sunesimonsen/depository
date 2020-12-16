import expect from "unexpected";
import { statusMiddleware } from "./index.js";
import { promiseMiddleware } from "@depository/promise-middleware";
import { Store } from "@depository/store";

const fakeApi = {
  async getTestValue() {
    return "From fake API";
  },
  async deadEnd() {
    throw new Error("Dead end!");
  },
};

describe("status-middleware", () => {
  let store;
  beforeEach(() => {
    store = new Store();

    store
      .useMiddleware(promiseMiddleware(fakeApi))
      .useMiddleware(statusMiddleware(fakeApi));
  });

  it("handles promise payloads", async () => {
    const dispatchPromise = store.dispatch({
      status: "test-value",
      payload: fakeApi.getTestValue(),
      apply: (store, { payload }) => {
        store.set("response", payload);
      },
    });

    expect(store.get(), "to equal", {
      statuses: { "test-value": "loading" },
    });

    await dispatchPromise;

    expect(store.get(), "to equal", {
      response: "From fake API",
      statuses: { "test-value": "ready" },
    });
  });

  it("handles async function payloads", async () => {
    const dispatchPromise = store.dispatch({
      status: "test-value",
      payload: (cache, api) => api.getTestValue(),
      apply: (store, { payload }) => {
        store.set("response", payload);
      },
    });

    expect(store.get(), "to equal", {
      statuses: { "test-value": "loading" },
    });

    await dispatchPromise;

    expect(store.get(), "to equal", {
      response: "From fake API",
      statuses: { "test-value": "ready" },
    });
  });

  it("handles promise rejections", async () => {
    const dispatchPromise = store.dispatch({
      status: "test-value",
      payload: (cache, api) => api.deadEnd(),
      apply: (store, { error }) => {
        store.set("response", error);
      },
    });

    expect(store.get(), "to equal", {
      statuses: { "test-value": "loading" },
    });

    await dispatchPromise;

    expect(store.get(), "to equal", {
      statuses: { "test-value": "failed" },
      response: Error("Dead end!"),
    });
  });
});
