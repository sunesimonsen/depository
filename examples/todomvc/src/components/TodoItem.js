import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { todoById } from "../models/todo.js";

export const TodoItem = connect(
  ({ todo }) => html`
    <li class=${todo.completed && "completed"}>
      <div class="view">
        <input class="toggle" type="checkbox" checked=${todo.completed} />
        <label>${todo.text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template" />
    </li>
  `,
  ({ id }) => ({ todo: todoById(id) })
);
