import { Router } from "@nano-router/router";

export const nanoRouterPlugin = ({ routes, history }) => (store) => {
  const router = new Router({ routes, history });

  const updateRouting = () => {
    store.dispatch({
      payload: {
        route: router.route,
        location: router.location,
        params: router.params,
        queryParams: router.queryParams,
      },
      apply: (routing) => ({ routing }),
    });
  };

  updateRouting();
  router.listen(() => {
    updateRouting();
  });

  const navigationMiddleware = ({ store, next, action }) => {
    if (action.type === "navigate") {
      router.navigate(action.payload);
    } else {
      return next(action);
    }
  };

  store.router = router;
  store.useMiddleware(navigationMiddleware);
};
