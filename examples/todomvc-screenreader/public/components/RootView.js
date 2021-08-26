import { html } from "@depository/view";

import { TodoView } from "./TodoView.js";
import { CreateTodoView } from "./CreateTodoView.js";
import { EditTodoView } from "./EditTodoView.js";
import { TodoListView } from "./TodoListView.js";

export class RootView {
  data() {
    return { routing: "routing.{route,params}" };
  }

  render({ routing }) {
    switch (routing.route) {
      case "todoCreate":
        return html`<${CreateTodoView} />`;

      case "todoEdit":
        return html`<${EditTodoView} id=${routing.params.id} />`;

      case "todo":
        return html`<${TodoView} id=${routing.params.id} />`;

      default:
        return html`<${TodoListView} />`;
    }
  }
}
