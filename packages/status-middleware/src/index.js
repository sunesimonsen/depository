const isPromise = (obj) =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

export const statusMiddleware = (...args) => async ({
  store,
  next,
  action,
}) => {
  const execution = next(action);
  const key = `statuses.${action.status}`;

  if (isPromise(execution) && action.status) {
    try {
      store.cache.set(key, "loading");
      store.cache.notify();
      const result = await execution;
      await next({ payload: { [key]: "ready" } });
      return result;
    } catch (e) {
      await next({ payload: { [key]: "failed" } });
      throw e;
    }
  } else {
    return execution;
  }
};
