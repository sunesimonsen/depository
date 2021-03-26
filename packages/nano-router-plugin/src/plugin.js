const equals = (a, b) => {
  if (a === b) return true;
  if ((!a && b) || (a && !b)) return false;

  const aType = typeof a;
  const bType = typeof b;
  if (aType !== bType) return false;

  if (aType === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    for (let i = 0; i < aKeys.length; i++) {
      const key = aKeys[i];
      if (!equals(a[key], b[key])) return false;
    }

    return true;
  } else {
    return false;
  }
};

export const nanoRouterPlugin = (router) => (store) => {
  const updateRouting = () => {
    const prevRouting = store.get("routing");
    const routing = {
      route: router.route,
      location: router.location,
      params: router.params,
      queryParams: router.queryParams,
    };

    if (equals(prevRouting, routing)) return null;

    store.dispatch({
      name: "Routing",
      payload: { routing },
    });
  };

  updateRouting();
  router.listen(() => {
    updateRouting();
  });
};
