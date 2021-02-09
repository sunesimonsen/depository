import { html } from "@depository/view";
import { clearCompleteTodos } from "../models/todo.js";

export class ClearCompletedButton {
  onClick() {
    this.dispatch(clearCompleteTodos());
  }

  render() {
    return html`
      <button class="clear-completed" onClick=${this.onClick}>
        Clear completed
      </button>
    `;
  }
}
