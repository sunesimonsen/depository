import { html } from "@depository/view";
import { activeTodoCount, toggleAllTodos } from "../models/todo.js";

export class ToggleAll {
  data() {
    return { activeTodoCount };
  }

  onChange() {
    this.dispatch(toggleAllTodos());
  }

  render({ activeTodoCount }) {
    return html`
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        checked=${activeTodoCount === 0}
        onChange=${this.onChange}
      />
      <label for="toggle-all">Mark all as complete</label>
    `;
  }
}