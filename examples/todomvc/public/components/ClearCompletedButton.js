import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { clearCompleteTodos } from "../models/todo.js";

export const ClearCompletedButton = connect(({ dispatch }) => {
  const onClick = () => {
    dispatch(clearCompleteTodos());
  };

  return html`
    <button class="clear-completed" onClick=${onClick}>Clear completed</button>
  `;
});
