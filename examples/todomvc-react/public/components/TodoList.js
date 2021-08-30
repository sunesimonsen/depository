import { html, useData } from "@depository/react";
import { filteredTodos } from "@depository/todomvc-model";
import { TodoItem } from "./TodoItem.js";

export const TodoList = () => {
  const todos = useData(filteredTodos);

  return html`
    <ul className="todo-list">
      ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
    </ul>
  `;
};
