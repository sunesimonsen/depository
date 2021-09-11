import { html } from "@depository/view";
import { filteredTodos } from "@depository/todomvc-model";
import { TodoItem } from "./TodoItem.js";

export class TodoList {
  data() {
    return { todos: filteredTodos };
  }

  render({ todos }) {
    if (todos.length === 0) {
      return html`<p>No todos found</p>`;
    }

    return html`
      <ul aria-label="Todo items">
        ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
      </ul>
    `;
  }
}
