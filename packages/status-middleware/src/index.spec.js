import unexpected from "unexpected";
import unexpectedSinon from "unexpected-sinon";
import sinon from "sinon";
import { statusMiddleware } from "./index.js";
import { functionMiddleware } from "@depository/function-middleware";
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
      .useMiddleware(functionMiddleware(fakeApi))
      .useMiddleware(statusMiddleware(fakeApi));
  });

  it("handles async function payloads", async () => {
    const dispatchPromise = store.dispatch({
      status: "test-value",
      payload: async (api) => {
        const response = await api.getTestValue();
        return { response };
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
      payload: (api) => api.deadEnd(),
    });

    expect(store.get(), "to equal", {
      statuses: { "test-value": "loading" },
    });

    await expect(() => dispatchPromise, "to be rejected with", "Dead end!");

    expect(store.get(), "to equal", {
      statuses: { "test-value": "failed" },
    });
  });

  it("triggers observers of the status", async () => {
    const spy = sinon.spy();
    store.observe("statuses.test-value").subscribe(spy);

    await store.dispatch({
      status: "test-value",
      payload: async (api) => {
        const response = await fakeApi.getTestValue();
        return { response };
      },
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
