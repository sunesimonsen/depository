import { html, render } from "@depository/view";
import { Store } from "@depository/store";
import { promiseMiddleware } from "@depository/promise-middleware";
import { statusMiddleware } from "@depository/status-middleware";
import { nanoRouterPlugin } from "@depository/nano-router-plugin";
import * as api from "./api.js";
import { RootView } from "./components/RootView.js";
import { Router, Routes, Route } from "@nano-router/router";
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

store.use(nanoRouterPlugin(router));
store.useMiddleware(promiseMiddleware(api));
store.useMiddleware(statusMiddleware(api));

render(html`<${RootView} />`, store, document.body, { router });
