import { html, render } from "@depository/view";
import { RootView } from "./components/RootView.js";
import { Store } from "@depository/store";
import { loadTodos, INITIAL_STATE } from "@depository/todomvc-model";
import { Routing, Router, Routes, Route } from "@nano-router/depository-view";
import { functionMiddleware } from "@depository/function-middleware";
import { createBrowserHistory } from "@nano-router/history";
import * as api from "@depository/todomvc-api";

const store = new Store(INITIAL_STATE);

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "TodoMVC" }));
}

const history = createBrowserHistory();

const routes = new Routes(
  new Route("todos", "/"),
  new Route("todoCreate", "/todo/new"),
  new Route("todoEdit", "/todo/:id/edit"),
  new Route("todo", "/todo/:id")
);

const router = new Router({ routes, history });

store.useMiddleware(functionMiddleware(api));

store.dispatch(loadTodos());

render(
  html`<${Routing} router=${router}><${RootView} /><//>`,
  store,
  document.getElementById("app")
);
