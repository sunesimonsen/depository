import { html } from "@depository/view";

import { classes } from "../utils/classes.js";
import { DestroyButton } from "./DestroyButton.js";
import { EditInput } from "./EditInput.js";

import {
  todoById,
  toggleTodo,
  startEditingTodo,
} from "@depository/todomvc-model";

export class TodoItem {
  constructor() {
    this.onChange = (e) => {
      e.preventDefault();
      this.dispatch(toggleTodo({ id: this.props.id }));
    };

    this.onDblClick = () => {
      this.dispatch(startEditingTodo({ id: this.props.id }));
    };
  }

  data({ id }) {
    return { todo: todoById(id) };
  }

  renderInput({ todo }) {
    if (!todo.editing) return null;

    return html`<${EditInput} id=${todo.id} />`;
  }

  render({ todo }) {
    return html`
      <li
        className=${classes(
          todo.editing && "editing",
          todo.completed && "completed"
        )}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange=${this.onChange}
            .checked=${todo.completed}
          />
          <label onDblClick=${this.onDblClick}>${todo.text}</label>
          <${DestroyButton} id=${todo.id} />
        </div>
        ${this.renderInput({ todo })}
      </li>
    `;
  }
}
