const isPromise = require("is-promise");

const statusMiddleware = (...args) => async ({ store, next, action }) => {
  if (!action.payload || !action.status) {
    return next(action);
  }

  const payload =
    typeof action.payload === "function"
      ? action.payload(...args)
      : action.payload;

  if (!isPromise(payload)) {
    return next({
      ...action,
      payload,
    });
  }

  store.cache.set(["statuses", action.status], "loading");

  payload.then(
    () => {
      store.cache.set(["statuses", action.status], "ready");
    },
    (error) => {
      store.cache.set(["statuses", action.status], "failed");
    }
  );

  return next({
    ...action,
    payload,
  });
};

module.exports = statusMiddleware;
