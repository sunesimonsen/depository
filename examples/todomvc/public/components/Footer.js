import { html } from "@depository/view";
import { activeTodoCount } from "@depository/todomvc-model";

import { VisibilityFilter } from "./VisibilityFilter.js";
import { ClearCompletedButton } from "./ClearCompletedButton.js";

export class Footer {
  data() {
    return { activeTodoCount };
  }

  render({ activeTodoCount }) {
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
  }
}
