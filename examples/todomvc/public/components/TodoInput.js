import { html } from "@depository/view";
import { createTodo } from "../models/todo.js";

export class TodoInput {
  constructor() {
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(e) {
    if (e.code === "Enter") {
      this.dispatch(createTodo({ text: e.target.value.trim() }));

      e.target.value = "";
    }
  }

  render() {
    return html`
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        @keyup=${this.onKeyUp}
      />
    `;
  }
}
