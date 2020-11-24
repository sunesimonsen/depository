import { html } from "htm/preact";

export const TodoInput = ({ children }) => html`
  <input class="new-todo" placeholder="What needs to be done?" autofocus />
`;
