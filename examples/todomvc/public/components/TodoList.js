import { html } from "@depository/view";
import { allTodos } from "../models/todo.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList {
  data() {
    return { todos: allTodos };
  }

  render({ todos }) {
    return html`
      <ul class="todo-list">
        ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
      </ul>
    `;
  }
}
