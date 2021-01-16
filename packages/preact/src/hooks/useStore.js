import { useContext } from "preact/hooks";
import { StoreContext } from "../StoreContext.js";

export const useStore = () => useContext(StoreContext);
