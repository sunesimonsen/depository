import { h, Component, createContext } from "preact";

import { createBinding } from "./createBinding.js";

const { connect, StoreProvider } = createBinding({
  h,
  Component,
  createContext,
});

export { connect, StoreProvider };
