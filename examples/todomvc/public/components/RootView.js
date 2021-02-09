import { html } from "@depository/view";

import { Header } from "./Header.js";
import { Title } from "./Title.js";
import { TodoInput } from "./TodoInput.js";
import { ToggleAll } from "./ToggleAll.js";
import { TodoList } from "./TodoList.js";
import { Footer } from "./Footer.js";

export class RootView {
  render() {
    return html`
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
  }
}
