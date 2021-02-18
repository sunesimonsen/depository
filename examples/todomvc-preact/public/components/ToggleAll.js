import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { activeTodoCount, toggleAllTodos } from "../models/todo.js";

export const ToggleAll = connect(
  { activeTodoCount },
  ({ dispatch, activeTodoCount }) => {
    const onChange = () => {
      dispatch(toggleAllTodos());
    };

    return html`
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        checked=${activeTodoCount === 0}
        onChange=${onChange}
      />
      <label for="toggle-all">Mark all as complete</label>
    `;
  }
);
