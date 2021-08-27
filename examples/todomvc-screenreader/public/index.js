import { html, render } from "@depository/view";
import { RootView } from "./components/RootView.js";
import { Store } from "@depository/store";
import { loadTodos, INITIAL_STATE } from "@depository/todomvc-model";
import { nanoRouterPlugin } from "@depository/nano-router-plugin";
import { promiseMiddleware } from "@depository/promise-middleware";
import { Router, Routes, Route } from "@nano-router/router";
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

store.use(nanoRouterPlugin(router));
store.useMiddleware(promiseMiddleware(api));

store.dispatch(loadTodos());

render(html`<${RootView} />`, store, document.getElementById("app"), {
  router,
});
