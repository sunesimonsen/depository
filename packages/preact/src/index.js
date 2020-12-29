import { h, Component } from "preact";
import { StoreContext } from "./StoreContext.js";
import { createBinding } from "./createBinding.js";

export const StoreProvider = StoreContext.Provider;
export const connect = createBinding({ h, Component, StoreContext });
