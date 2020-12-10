import { h, Component, createContext } from "preact";
import { createBinding } from "./createBinding.js";

const binding = createBinding({
  h,
  Component,
  createContext,
});

export const connect = binding.connect;
export const StoreProvider = binding.StoreProvider;
