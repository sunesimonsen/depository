import { useMemo } from "preact/hooks";
import { useStore } from "./useStore.js";

export const useDispatch = () => {
  const store = useStore();
  return useMemo(() => store.dispatch.bind(store), [store]);
};
