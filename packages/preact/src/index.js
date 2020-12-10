import { h, Component, createContext } from "preact";
import { createBinding } from "./createBinding.js";

const { StoreProvider, connect } = createBinding({
  h,
  Component,
  createContext,
});

export { connect, StoreProvider };
