import { html } from "@depository/react/html";
import { connect } from "@depository/react";
import { allTodos } from "@depository/todomvc-model";
import { TodoItem } from "./TodoItem.js";

export const TodoList = connect(
  { todos: allTodos },
  ({ todos }) =>
    html`
      <ul className="todo-list">
        ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
      </ul>
    `
);
