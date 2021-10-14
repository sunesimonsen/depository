import { html } from "@depository/view";
import { createTodo } from "@depository/todomvc-model";
import { Link } from "@nano-router/depository-view";

export class CreateTodoView {
  constructor() {
    this.onSubmit = (e) => {
      this.dispatch(createTodo({ text: this.todoText.value }));
      this.context.router.navigate("todos");
      e.preventDefault();
    };
  }

  didMount() {
    this.todoText.focus();
  }

  render() {
    return html`
      <header>
        <nav>
          <ul>
            <li><${Link} route="todos">Show todos<//></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Create todo</h2>
        <p>With this form, you can create new todos</p>
        <form onSubmit=${this.onSubmit}>
          <fieldset>
            <legend>Enter the text of the new todo</legend>
            <label for="todo-text">Todo text</label>
            <input
              id="todo-text"
              type="input"
              autocomplete="off"
              ref=${this.createRef("todoText")}
            />
          </fieldset>
          <button type="submit">Create</button>
        </form>
      </main>
    `;
  }
}
