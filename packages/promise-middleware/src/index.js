export const promiseMiddleware = (...args) => async ({
  store,
  next,
  action,
}) => {
  let payload = action.payload;

  if (!payload) {
    return next(action);
  }

  try {
    if (typeof payload === "function") {
      payload = await payload(store.cache, ...args);
    } else {
      payload = await payload;
    }

    return next({
      ...action,
      payload,
    });
  } catch (error) {
    next({
      ...action,
      payload: null,
      error,
    });

    throw error;
  }
};
