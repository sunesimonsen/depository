import { html } from "htm/preact";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/preact";
import { RootView } from "./RootView.js";
import { loadTodos } from "../models/todo.js";
import { promiseMiddleware } from "@depository/promise-middleware";
import * as api from "../api.js";

const store = new Store({
  global: {
    visibilityFilter: "all",
  },
  entities: {
    todo: {},
  },
});

store.useMiddleware(promiseMiddleware(api));

store.dispatch(loadTodos());

export const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;
