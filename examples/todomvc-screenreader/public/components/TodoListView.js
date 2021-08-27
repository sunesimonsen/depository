import { html } from "@depository/view";
import { TodoList } from "./TodoList.js";
import { Link } from "@depository/nano-router-plugin";
import { VisibilityFilters } from "./VisibilityFilters.js";

export class TodoListView {
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
      </main>
    `;
  }
}
