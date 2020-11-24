import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { todoCount } from "../models/todo.js";

export const Footer = connect(
  ({ todoCount }) => html`
    <footer class="footer">
      <span class="todo-count"><strong>${todoCount}</strong> item left</span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `,
  { todoCount }
);
