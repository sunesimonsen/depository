import React from "react";
import { html } from "@depository/react/html";
import { Header } from "./Header.js";
import { Title } from "./Title.js";
import { TodoInput } from "./TodoInput.js";
import { ToggleAll } from "./ToggleAll.js";
import { TodoList } from "./TodoList.js";
import { Footer } from "./Footer.js";

export const RootView = () => html`
  <${React.Fragment}>
    <${Header}>
      <${Title}>todos<//>
      <${TodoInput} />
    <//>
    <section className="main">
      <${ToggleAll} />
      <${TodoList} />
    </section>
    <${Footer} />
  <//>
`;
