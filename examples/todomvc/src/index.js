import { html, render } from "htm/preact";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/preact";
import { RootView } from "./components/RootView.js";
import { createTodo } from "./models/todo.js";

const store = new Store({
  global: {
    visibilityFilter: "all",
  },
  entities: {
    todo: {},
  },
});

store.dispatch(createTodo({ text: "Buy milk" }));
store.dispatch(createTodo({ text: "Write a front-end stack" }));

const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;

render(html`<${Application} />`, document.getElementById("app"));
