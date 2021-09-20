import { html } from "@depository/view";
import { clearCompleteTodos } from "@depository/todomvc-model";

export class ClearCompletedButton {
  constructor() {
    this.onClick = () => {
      this.dispatch(clearCompleteTodos());
    };
  }

  render() {
    return html`
      <button class="clear-completed" onClick=${this.onClick}>
        Clear completed
      </button>
    `;
  }
}
