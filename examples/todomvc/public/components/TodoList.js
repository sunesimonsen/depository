import { html } from "@depository/view";
import { filteredTodos } from "@depository/todomvc-model";
import { TodoItem } from "./TodoItem.js";

export class TodoList {
  data() {
    return { todos: filteredTodos };
  }

  render({ todos }) {
    return html`
      <ul className="todo-list">
        ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
      </ul>
    `;
  }
}
