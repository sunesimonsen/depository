import { html } from "@depository/view";
import { createTodo } from "@depository/todomvc-model";

export class TodoInput {
  constructor() {
    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        this.dispatch(createTodo({ text: e.target.value.trim() }));
        e.target.value = "";
      }
    };
  }

  render() {
    return html`
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onKeyDown=${this.onKeyDown}
      />
    `;
  }
}
