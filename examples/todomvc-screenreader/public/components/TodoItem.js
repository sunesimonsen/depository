import { html } from "@depository/view";
import { Link } from "@depository/nano-router-plugin";
import { todoById } from "@depository/todomvc-model";

export class TodoItem {
  data({ id }) {
    return { todo: todoById(id) };
  }

  render({ id, todo }) {
    if (!todo) return null;

    const state = todo.completed ? "completed" : "active";

    return html`
      <li>
        <${Link} route="todo" params=${{ id }}>${todo.text} (${state})<//>
      </li>
    `;
  }
}
