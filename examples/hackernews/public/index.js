import { html, render } from "@depository/view";
import { Store } from "@depository/store";
import { functionMiddleware } from "@depository/function-middleware";
import { statusMiddleware } from "@depository/status-middleware";
import { Routing, Router, Routes, Route } from "@nano-router/depository-view";
import * as api from "./api.js";
import { RootView } from "./components/RootView.js";
import { createBrowserHistory } from "@nano-router/history";
import { initialState } from "./models/news.js";

const store = new Store(initialState);

if (window.__DEPOSITORY__) {
  store.use(window.__DEPOSITORY__.plugin({ name: "HackerNews" }));
}

const history = createBrowserHistory();

const routes = new Routes(
  new Route("topStories", "/"),
  new Route("answer", "/stories/:storyId/comments/:commentId"),
  new Route("story", "/stories/:id")
);

const router = new Router({ routes, history });

store.useMiddleware(functionMiddleware(api));
store.useMiddleware(statusMiddleware(api));

render(
  html`<${Routing} router=${router}><${RootView} /><//>`,
  store,
  document.body
);
