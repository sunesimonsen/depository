import { useLayoutEffect, useState, useMemo } from "preact/hooks";
import { useStore } from "./useStore.js";

export const useData = (pathOrComputed) => {
  const store = useStore();
  const observable = useMemo(
    () => store.observe(pathOrComputed),
    [store, pathOrComputed]
  );
  const [value, setValue] = useState(observable.value);

  useLayoutEffect(() => {
    const subscription = observable.subscribe((newValue) => {
      setValue(newValue);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable, store]);

  return value;
};
