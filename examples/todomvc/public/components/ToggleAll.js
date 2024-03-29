import { html } from "@depository/view";
import { activeTodoCount, toggleAllTodos } from "@depository/todomvc-model";

export class ToggleAll {
  constructor() {
    this.onChange = () => {
      this.dispatch(toggleAllTodos());
    };
  }

  data() {
    return { activeTodoCount };
  }

  render({ activeTodoCount }) {
    return html`
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        .checked=${activeTodoCount === 0}
        onChange=${this.onChange}
      />
      <label for="toggle-all">Mark all as complete</label>
    `;
  }
}
