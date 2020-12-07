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
      payload = await payload(...args);
    } else {
      payload = await payload;
    }

    return next({
      ...action,
      payload,
    });
  } catch (error) {
    return next({
      ...action,
      payload: null,
      error,
    });
  }
};
