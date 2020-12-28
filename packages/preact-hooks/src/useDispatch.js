import { useContext, useMemo } from "preact/hooks";
import { StoreContext } from "./StoreContext.js";

export const useDispatch = () => {
  const store = useContext(StoreContext);
  return useMemo(() => store.dispatch.bind(store), [store]);
};
