import { useContext, useCallback } from "preact/hooks";
import { StoreContext } from "./StoreContext.js";

export const useAction = (action) => {
  const store = useContext(StoreContext);
  return useCallback(() => store.dispatch(action), [store, action]);
};
