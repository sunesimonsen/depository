const expect = require("unexpected");
const promiseMiddleware = require("./index");
const Store = require("@depository/store");

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
      apply: (store, { payload }) => {
        store.set("response", payload);
      },
    });

    expect(store.data, "to equal", {
      response: "From fake API",
    });
  });

  it("resolves async function payloads", async () => {
    await store.dispatch({
      payload: (api) => api.getTestValue(),
      apply: (store, { payload }) => {
        store.set("response", payload);
      },
    });

    expect(store.data, "to equal", {
      response: "From fake API",
    });
  });

  it("forwards promise rejections as the payload", async () => {
    await store.dispatch({
      payload: (api) => api.deadEnd(),
      apply: (store, { error }) => {
        store.set("response", error);
      },
    });

    expect(store.data, "to equal", {
      response: new Error("Dead end!"),
    });
  });
});
