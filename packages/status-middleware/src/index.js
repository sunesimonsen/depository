const isPromise = (obj) =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

export const statusMiddleware = (...args) => async ({
  store,
  next,
  action,
}) => {
  if (!action.payload || !action.status) {
    return next(action);
  }

  const payload =
    typeof action.payload === "function"
      ? action.payload(store.cache, ...args)
      : action.payload;

  if (!isPromise(payload)) {
    return next({
      ...action,
      payload,
    });
  }

  store.cache.set(`statuses.${action.status}`, "loading");
  store.cache.notify();

  payload.then(
    () => {
      store.cache.set(`statuses.${action.status}`, "ready");
    },
    (error) => {
      store.cache.set(`statuses.${action.status}`, "failed");
      throw error;
    }
  );

  return next({
    ...action,
    payload,
  });
};
