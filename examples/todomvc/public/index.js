import { html, render } from "@depository/view";
import { RootView } from "./components/RootView.js";
import { Store } from "@depository/store";
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

render(html`<${RootView} />`, store, document.getElementById("app"));
