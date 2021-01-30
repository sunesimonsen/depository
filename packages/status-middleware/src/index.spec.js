import unexpected from "unexpected";
import unexpectedSinon from "unexpected-sinon";
import sinon from "sinon";
import { statusMiddleware } from "./index.js";
import { promiseMiddleware } from "@depository/promise-middleware";
import { Store } from "@depository/store";

const expect = unexpected.clone().use(unexpectedSinon);

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
      apply: (payload) => ({ response: payload }),
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
      apply: (payload) => ({ response: payload }),
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
      apply: (response, { error }) => ({ error: error.message }),
    });

    expect(store.get(), "to equal", {
      statuses: { "test-value": "loading" },
    });

    await dispatchPromise;

    expect(store.get(), "to equal", {
      statuses: { "test-value": "failed" },
      error: "Dead end!",
    });
  });

  it("triggers observers of the status", async () => {
    const spy = sinon.spy();
    store.observe("statuses.test-value").subscribe(spy);

    await store.dispatch({
      status: "test-value",
      payload: fakeApi.getTestValue(),
      apply: (response) => ({ response }),
    });

    expect(store.get(), "to equal", {
      response: "From fake API",
      statuses: { "test-value": "ready" },
    });

    expect(spy, "to have calls satisfying", () => {
      spy("loading");
      spy("ready");
    });
  });
});
