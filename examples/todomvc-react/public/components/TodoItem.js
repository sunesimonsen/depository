import { html } from "@depository/react/html";
import { connect } from "@depository/react";

import { classes } from "../utils/classes.js";
import { DestroyButton } from "./DestroyButton.js";

import {
  todoById,
  toggleTodo,
  updateTodo,
  startEditingTodo,
  stopEditingTodo,
} from "@depository/todomvc-model";

export const TodoItem = connect(
  ({ id }) => ({ todo: todoById(id) }),
  ({ dispatch, id, todo }) => {
    const onChange = (e) => {
      dispatch(toggleTodo({ id }));
    };

    const onDoubleClick = () => {
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
        className=${classes(
          todo.editing && "editing",
          todo.completed && "completed"
        )}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange=${onChange}
            checked=${todo.completed}
          />
          <label onDoubleClick=${onDoubleClick}>${todo.text}</label>
          <${DestroyButton} id=${todo.id} />
        </div>
        <input
          ref=${(element) => element && element.focus()}
          className="edit"
          defaultValue=${todo.text}
          onKeyUp=${onKeyUp}
          onBlur=${onBlur}
        />
      </li>
    `;
  }
);
