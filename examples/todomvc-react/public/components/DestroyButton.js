import { html } from "@depository/react/html";
import { connect } from "@depository/react";
import { removeTodo } from "@depository/todomvc-model";

export const DestroyButton = connect(({ id, dispatch }) => {
  const onClick = () => {
    dispatch(removeTodo({ id }));
  };

  return html`<button onClick=${onClick} className="destroy"></button>`;
});
