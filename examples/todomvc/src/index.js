import { html, render } from "htm/preact";
import { Store } from "@depository/store";
import { StoreProvider } from "@depository/preact";
import { RootView } from "./components/RootView.js";

const store = new Store({
  entities: {
    todo: {
      42: {
        id: "42",
        completed: false,
        text: "New",
      },
      666: {
        id: "666",
        completed: true,
        text: "Example",
      },
    },
  },
});

const Application = () => html`
  <${StoreProvider} value=${store}>
    <${RootView} />
  <//>
`;

render(html`<${Application} />`, document.getElementById("app"));
