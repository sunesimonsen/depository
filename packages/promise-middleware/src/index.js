export const promiseMiddleware = (...args) => async ({
  store,
  next,
  action,
}) => {
  if (!action.payload || typeof action.payload !== "function") {
    return next(action);
  }

  return next({
    ...action,
    payload: await action.payload(store.cache.readonly, ...args),
  });
};
