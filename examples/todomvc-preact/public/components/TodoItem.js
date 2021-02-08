import { html } from "htm/preact";
import { connect } from "@depository/preact";

import { classes } from "../utils/classes.js";
import { DestroyButton } from "./DestroyButton.js";

import {
  todoById,
  toggleTodo,
  updateTodo,
  startEditingTodo,
  stopEditingTodo,
} from "../models/todo.js";

export const TodoItem = connect(
  ({ id }) => ({ todo: todoById(id) }),
  ({ dispatch, id, todo }) => {
    const onChange = (e) => {
      e.preventDefault();
      dispatch(toggleTodo({ id }));
    };

    const onDblClick = () => {
      dispatch(startEditingTodo({ id }));
    };

    const onKeyUp = (e) => {
      if (e.code === "Enter") {
        dispatch(
          updateTodo({
            ...todo,
            text: e.target.value.trim(),
          })
        );

        e.target.value = "";
      }
    };

    const onBlur = () => {
      dispatch(stopEditingTodo({ id }));
    };

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
            onChange=${onChange}
            checked=${todo.completed}
          />
          <label onDblClick=${onDblClick}>${todo.text}</label>
          <${DestroyButton} id=${todo.id} />
        </div>
        <input
          ref=${(element) => element && element.focus()}
          class="edit"
          value=${todo.text}
          onKeyUp=${onKeyUp}
          onBlur=${onBlur}
        />
      </li>
    `;
  }
);
