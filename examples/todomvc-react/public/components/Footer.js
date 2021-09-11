import { html } from "@depository/react/html";
import { connect } from "@depository/react";
import { activeTodoCount } from "@depository/todomvc-model";

import { VisibilityFilter } from "./VisibilityFilter.js";
import { ClearCompletedButton } from "./ClearCompletedButton.js";

export const Footer = connect({ activeTodoCount }, ({ activeTodoCount }) => {
  return html`
    <footer className="footer">
      <span className="todo-count"
        ><strong>${activeTodoCount}</strong> item left</span
      >
      <ul className="filters">
        <${VisibilityFilter} value="all">All<//>
        <${VisibilityFilter} value="active">Active<//>
        <${VisibilityFilter} value="completed">Completed<//>
      </ul>
      <${ClearCompletedButton} />
    </footer>
  `;
});
