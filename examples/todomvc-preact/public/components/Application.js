import { html } from "htm/preact";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/preact";
import { RootView } from "./RootView.js";
import { loadTodos, INITIAL_STATE } from "@depository/todomvc-model";
import { promiseMiddleware } from "@depository/promise-middleware";
import * as api from "@depository/todomvc-api";

const store = new Store(INITIAL_STATE);

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "TodoMVC" }));
}

store.useMiddleware(promiseMiddleware(api));

store.dispatch(loadTodos());

export const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;
