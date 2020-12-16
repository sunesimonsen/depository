import { html, render } from "htm/preact";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/preact";
import { RootView } from "./components/RootView.js";
import { loadTodos } from "./models/todo.js";
import { promiseMiddleware } from "@depository/promise-middleware";
import * as api from "./api.js";

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

const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;

render(html`<${Application} />`, document.getElementById("app"));
