import { html } from "@depository/view";

import { classes } from "../utils/classes.js";
import { DestroyButton } from "./DestroyButton.js";

import {
  todoById,
  toggleTodo,
  updateTodo,
  startEditingTodo,
  stopEditingTodo,
} from "../models/todo.js";

export class TodoItem {
  data({ id }) {
    return { todo: todoById(id) };
  }

  onChange(e) {
    e.preventDefault();
    const { id } = this.props;
    this.dispatch(toggleTodo({ id }));
  }

  onDblClick() {
    const { id } = this.props;
    this.dispatch(startEditingTodo({ id }));
  }

  onKeyUp(e) {
    if (e.code === "Enter") {
      const { todo } = this.props;
      this.dispatch(
        updateTodo({
          ...todo,
          text: e.target.value.trim(),
        })
      );

      e.target.value = "";
    }
  }

  onBlur() {
    const { id } = this.props;
    this.dispatch(stopEditingTodo({ id }));
  }

  render({ todo }) {
    return html`
      <li
        class=${classes(
          todo.editing && "editing",
          todo.completed && "completed"
        )}
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            onChange=${this.onChange}
            checked=${todo.completed}
          />
          <label onDblClick=${this.onDblClick}>${todo.text}</label>
          <${DestroyButton} id=${todo.id} />
        </div>
        <input
          ref=${(element) => element && element.focus()}
          class="edit"
          value=${todo.text}
          onKeyUp=${this.onKeyUp}
          onBlur=${this.onBlur}
        />
      </li>
    `;
  }
}
