import { html } from "@depository/view";
import { TodoList } from "./TodoList.js";
import { Link } from "@nano-router/depository-view";
import { VisibilityFilters } from "./VisibilityFilters.js";
import { clearCompleteTodos } from "@depository/todomvc-model";

export class TodoListView {
  constructor() {
    this.clearCompleteTodos = () => {
      this.dispatch(clearCompleteTodos());
    };
  }

  render({ id }) {
    return html`
      <nav>
        <ul>
          <${Link} route="todoCreate">Create a new todo<//>
        </ul>
      </nav>
      <main>
        <h2>Todos</h2>
        <p>Here is the list of all your todos.</p>
        <${TodoList} />
        <${VisibilityFilters} />
        <button onClick=${this.clearCompleteTodos}>
          Clear completed todos
        </button>
      </main>
    `;
  }
}
