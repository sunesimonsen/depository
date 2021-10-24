import { html, render } from "@depository/view";
import { Store } from "@depository/store";
import { functionMiddleware } from "@depository/function-middleware";
import { statusMiddleware } from "@depository/status-middleware";
import { Routing, Router, Routes, Route } from "@nano-router/depository-view";
import { RootView } from "./components/RootView.js";
import { createBrowserHistory } from "@nano-router/history";
import { ScriptLoader } from "./components/ScriptLoader.js";
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
      <${ScriptLoader}
        sources=${[
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.js",
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-js-templates.js",
        ]}
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css"
      />
    `,
    store,
    document.body,
    { pageMap, navigation }
  );
};
