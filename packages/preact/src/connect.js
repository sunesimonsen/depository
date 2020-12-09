import { h, Component } from "preact";
import { createConnect } from "./createConnect.js";
import { StoreContext } from "./StoreContext";

export const StoreProvider = StoreContext.Provider;
export const connect = createConnect({ h, Component });
