import { html } from "@depository/view";

import { classes } from "../utils/classes.js";
import { DestroyButton } from "./DestroyButton.js";

import {
  todoById,
  toggleTodo,
  updateTodo,
  startEditingTodo,
  stopEditingTodo,
} from "@depository/todomvc-model";

const focus = (element) => element && element.focus();

export class TodoItem {
  constructor() {
    this.onChange = (e) => {
      e.preventDefault();
      this.dispatch(toggleTodo({ id: this.props.id }));
    };

    this.onDblClick = () => {
      this.dispatch(startEditingTodo({ id: this.props.id }));
    };

    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        const { todo } = this.props;
        this.dispatch(updateTodo({ ...todo, text: e.target.value.trim() }));
        e.target.value = "";
      }
    };

    this.onBlur = () => {
      this.dispatch(stopEditingTodo({ id: this.props.id }));
    };
  }

  data({ id }) {
    return { todo: todoById(id) };
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
            @change=${this.onChange}
            .checked=${todo.completed}
          />
          <label @dblclick=${this.onDblClick}>${todo.text}</label>
          <${DestroyButton} id=${todo.id} />
        </div>
        <input
          ref=${focus}
          class="edit"
          .value=${todo.text}
          @keydown=${this.onKeyDown}
          @blur=${this.onBlur}
        />
      </li>
    `;
  }
}
