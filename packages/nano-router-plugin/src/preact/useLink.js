import { useCallback, useMemo } from "preact/hooks";
import { useStore } from "@depository/preact/hooks";

const shouldNavigate = (e) =>
  !e.defaultPrevented &&
  !e.button &&
  !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

export const useLink = (routeNameOrOptions) => {
  const store = useStore();

  const href = useMemo(() => store.router.createUrl(routeNameOrOptions), [
    store.router,
    routeNameOrOptions,
  ]);

  const onClick = useCallback(
    (e) => {
      if (shouldNavigate(e)) {
        e.preventDefault();
        store.dispatch({
          type: "navigate",
          payload: routeNameOrOptions,
        });
      }
    },
    [store, routeNameOrOptions]
  );

  const target = routeNameOrOptions.target;

  if (typeof target === "string") {
    return { href, rel: "noopener", target };
  } else {
    return { href, onClick };
  }
};
