import { html } from "@depository/view";
import { Link } from "@nano-router/depository-view";
import { todoById, removeTodo } from "@depository/todomvc-model";

export class TodoView {
  constructor() {
    this.removeTodo = () => {
      this.context.router.navigate("todos");
      this.dispatch(removeTodo({ id: this.props.id }));
    };
  }

  data({ id }) {
    return { todo: todoById(id) };
  }

  render({ id, todo }) {
    if (!todo) return null;

    return html`
      <nav>
        <ul>
          <li><${Link} route="todos">Show todos<//></li>
          <li><${Link} route="todoEdit" params=${{ id }}>Edit todo<//></li>
        </ul>
      </nav>
      <h2>Todo</h2>
      <p>Here you can see the details of the todo</p>
      <dl>
        <dt>Text</dt>
        <dd>${todo.text}</dd>
        <dt>Status</dt>
        <dd>${todo.completed ? "Completed" : "Active"}</dd>
        <dt>Created at</dt>
        <dd>${todo.createdAt}</dd>
      </dl>
      <button onClick=${this.removeTodo}>Delete todo</button>
    `;
  }
}
