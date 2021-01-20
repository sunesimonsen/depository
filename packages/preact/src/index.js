import { h, Component } from "preact";
import { StoreContext } from "./StoreContext.js";
import { createBinding } from "./createBinding.js";
export { StoreProvider } from "./StoreProvider.js";

export const connect = createBinding({ h, Component, StoreContext });
