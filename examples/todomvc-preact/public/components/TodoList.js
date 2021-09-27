import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { filteredTodos } from "@depository/todomvc-model";
import { TodoItem } from "./TodoItem.js";

export const TodoList = connect(
  { todos: filteredTodos },
  ({ todos }) =>
    html`
      <ul className="todo-list">
        ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
      </ul>
    `
);
