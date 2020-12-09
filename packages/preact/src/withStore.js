import { h, Component } from "preact";
import { createWithStore } from "./createWithStore.js";
import { StoreContext } from "./StoreContext";

export const StoreProvider = StoreContext.Provider;
export const withStore = createWithStore({ h, Component });
