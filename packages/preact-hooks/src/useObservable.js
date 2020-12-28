import { useLayoutEffect, useContext, useState, useMemo } from "preact/hooks";
import { StoreContext } from "./StoreContext.js";

export const useObservable = (pathOrComputed) => {
  const store = useContext(StoreContext);
  const observable = useMemo(() => store.observe(pathOrComputed), [
    store,
    pathOrComputed,
  ]);
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
