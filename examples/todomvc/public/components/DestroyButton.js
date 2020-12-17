import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { removeTodo } from "../models/todo.js";

export const DestroyButton = connect(({ id, dispatch }) => {
  const onClick = () => {
    dispatch(removeTodo({ id }));
  };

  return html`<button onClick=${onClick} class="destroy"></button> `;
});
