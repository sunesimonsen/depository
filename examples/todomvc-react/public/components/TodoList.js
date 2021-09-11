import { html } from "@depository/react/html";
import { useData } from "@depository/react";
import { allTodos } from "@depository/todomvc-model";
import { TodoItem } from "./TodoItem.js";

export const TodoList = () => {
  const todos = useData(allTodos);

  return html`
    <ul className="todo-list">
      ${todos.map(({ id }) => html`<${TodoItem} key=${id} id=${id} />`)}
    </ul>
  `;
};
