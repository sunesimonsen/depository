import { html } from "htm/preact";

import { Header } from "./Header.js";
import { Title } from "./Title.js";
import { TodoInput } from "./TodoInput.js";
import { ToggleAll } from "./ToggleAll.js";
import { TodoList } from "./TodoList.js";
import { Footer } from "./Footer.js";

export const RootView = () => html`
  <${Header}>
    <${Title}>todos<//>
    <${TodoInput} />
  <//>
  <section class="main">
    <${ToggleAll} />
    <${TodoList} />
  </section>
  <${Footer} />
`;
