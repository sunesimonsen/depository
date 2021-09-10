import { html, render } from "@depository/view";
import { RootView } from "./components/RootView.js";
import { Store } from "@depository/store";
import { loadTodos, INITIAL_STATE } from "@depository/todomvc-model";
import { functionMiddleware } from "@depository/function-middleware";
import * as api from "@depository/todomvc-api";

const store = new Store(INITIAL_STATE);

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "TodoMVC" }));
}

store.useMiddleware(functionMiddleware(api));

store.dispatch(loadTodos());

render(html`<${RootView} />`, store, document.getElementById("app"));
