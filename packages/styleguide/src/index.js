import { html, render } from "@depository/view";
import { Store } from "@depository/store";
import { functionMiddleware } from "@depository/function-middleware";
import { statusMiddleware } from "@depository/status-middleware";
import { Routing, Router, Routes, Route } from "@nano-router/depository-view";
import { RootView } from "./components/RootView.js";
import { createBrowserHistory } from "@nano-router/history";
export { PageReference } from "./components/PageReference.js";
export { Title, SubTitle, Line, Heading } from "./components/Page.js";
export { Example } from "./components/Example.js";

export const styleguide = ({ logo, title, navigation, pageMap, importmap }) => {
  const store = new Store({
    global: {
      logo,
      importmap,
      title,
      direction: sessionStorage.getItem("direction") || "ltr",
    },
  });

  if (window.__DEPOSITORY__) {
    store.use(window.__DEPOSITORY__.plugin({ name: "Styleguide" }));
  }

  const history = createBrowserHistory();

  const routes = new Routes(
    new Route("index", "/"),
    new Route("page", "/page/:id")
  );

  const router = new Router({ routes, history });

  store.useMiddleware(functionMiddleware());
  store.useMiddleware(statusMiddleware());

  render(
    html`
      <${Routing} router=${router}><${RootView} /><//>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/monokai-sublime.min.css"
      />
    `,
    store,
    document.body,
    { pageMap, navigation }
  );
};
