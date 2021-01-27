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

  if (isPromise(execution) && action.status) {
    try {
      store.cache.set(`statuses.${action.status}`, "loading");
      store.cache.notify();
      const result = await execution;
      store.cache.set(`statuses.${action.status}`, "ready");
      return result;
    } catch (e) {
      store.cache.set(`statuses.${action.status}`, "failed");
      throw e;
    }
  } else {
    return execution;
  }
};
