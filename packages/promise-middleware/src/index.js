const readonlyCache = (cache) => ({
  get: cache.get.bind(cache),
  has: cache.has.bind(cache),
});

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
    payload: await action.payload(readonlyCache(store.cache), ...args),
  });
};
