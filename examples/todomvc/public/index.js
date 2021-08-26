import { html, render } from "@depository/view";
import { RootView } from "./components/RootView.js";
import { Store } from "@depository/store";
import { loadTodos } from "@depository/todomvc-model";
import { promiseMiddleware } from "@depository/promise-middleware";
import * as api from "@depository/todomvc-api";

const store = new Store({
  global: {
    visibilityFilter: "all",
  },
  entities: {
    todo: {},
  },
});

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "TodoMVC" }));
}

store.useMiddleware(promiseMiddleware(api));

store.dispatch(loadTodos());

render(html`<${RootView} />`, store, document.getElementById("app"));
