import { useContext } from "react";
import { StoreContext } from "./StoreContext.js";

export const useStore = () => useContext(StoreContext);
