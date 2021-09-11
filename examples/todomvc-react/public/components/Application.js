import { html } from "@depository/react/html";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/react";
import { RootView } from "./RootView.js";
import { loadTodos, INITIAL_STATE } from "@depository/todomvc-model";
import { functionMiddleware } from "@depository/function-middleware";
import * as api from "@depository/todomvc-api";

const store = new Store(INITIAL_STATE);

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "TodoMVC" }));
}

store.useMiddleware(functionMiddleware(api));

store.dispatch(loadTodos());

export const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;
