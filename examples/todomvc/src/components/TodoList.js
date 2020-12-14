import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { allTodos } from "../models/todo.js";
import { TodoItem } from "./TodoItem.js";

export const TodoList = connect(
  ({ todos }) =>
    html`
      <ul class="todo-list">
        ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
      </ul>
    `,
  { todos: allTodos }
);
