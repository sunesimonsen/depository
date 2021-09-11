import { createElement, Component } from "react";
import { StoreContext } from "./StoreContext.js";
import { createBinding } from "./createBinding.js";
export { StoreProvider } from "./StoreProvider.js";

export const connect = createBinding({
  createElement,
  Component,
  StoreContext,
});
