import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { activeTodoCount } from "../models/todo.js";

import { VisibilityFilter } from "./VisibilityFilter.js";
import { ClearCompletedButton } from "./ClearCompletedButton.js";

export const Footer = connect({ activeTodoCount }, ({ activeTodoCount }) => {
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${activeTodoCount}</strong> item left</span
      >
      <ul class="filters">
        <${VisibilityFilter} value="all">All<//>
        <${VisibilityFilter} value="active">Active<//>
        <${VisibilityFilter} value="completed">Completed<//>
      </ul>
      <${ClearCompletedButton} />
    </footer>
  `;
});
