const isPromise = (obj) =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

export const functionMiddleware =
  (...args) =>
  async ({ store, next, action }) => {
    if (!action.payload || typeof action.payload !== "function") {
      return next(action);
    }

    const inputs = action.inputs && store.cache.get(action.inputs);

    let payload = inputs
      ? action.payload(inputs, ...args)
      : action.payload(...args);

    if (isPromise(payload)) {
      payload = await payload;
    }

    return next({
      ...action,
      ...(inputs && { inputs }),
      payload,
    });
  };
