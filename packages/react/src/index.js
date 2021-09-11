import { createElement, Component } from "react";
import { StoreContext } from "./StoreContext.js";
import { createBinding } from "./createBinding.js";
export { StoreProvider } from "./StoreProvider.js";
export { useDispatch } from "./useDispatch.js";
export { useData } from "./useData.js";
export { useStore } from "./useStore.js";
export { html, h, render } from "./html.js";

export const connect = createBinding({
  createElement,
  Component,
  StoreContext,
});
