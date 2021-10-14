import { html } from "@depository/view";
import { todoById, updateTodo } from "@depository/todomvc-model";
import { Link } from "@nano-router/depository-view";

export class EditTodoView {
  constructor() {
    this.onSubmit = (e) => {
      this.dispatch(
        updateTodo({
          id: this.props.id,
          text: this.todoText.value,
          completed: this.todoCompleted.checked,
        })
      );
      this.context.router.navigate("todos");
      e.preventDefault();
    };
  }

  data({ id }) {
    return { todo: todoById(id) };
  }

  didMount() {
    this.todoText.focus();
  }

  render({ id, todo }) {
    if (!todo) return null;

    return html`
      <header>
        <nav>
          <ul>
            <li><${Link} route="todos">Show todos<//></li>
            <li><${Link} route="todo" params=${{ id }}>Show this todo<//></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Update todo</h2>
        <form onSubmit=${this.onSubmit}>
          <fieldset>
            <legend>Change the text of the todo</legend>
            <label for="todo-text">Todo text</label>
            <input
              id="todo-text"
              type="input"
              autocomplete="off"
              value=${todo.text}
              ref=${this.createRef("todoText")}
            />
          </fieldset>
          <fieldset>
            <legend>Change the completed state of the todo</legend>
            <label for="todo-completed">Completed</label>
            <input
              id="todo-completed"
              type="checkbox"
              checked=${todo.completed}
              ref=${this.createRef("todoCompleted")}
            />
          </fieldset>
          <button type="submit">Update</button>
        </form>
      </main>
    `;
  }
}
