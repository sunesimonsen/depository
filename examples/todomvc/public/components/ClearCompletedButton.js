import { html } from "@depository/view";
import { clearCompleteTodos } from "../models/todo.js";

export class ClearCompletedButton {
  constructor() {
    this.onClick = () => {
      this.dispatch(clearCompleteTodos());
    };
  }

  render() {
    return html`
      <button class="clear-completed" @click=${this.onClick}>
        Clear completed
      </button>
    `;
  }
}
