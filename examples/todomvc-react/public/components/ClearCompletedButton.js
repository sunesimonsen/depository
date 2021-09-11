import { html } from "@depository/react/html";
import { connect } from "@depository/react";
import { clearCompleteTodos } from "@depository/todomvc-model";

export const ClearCompletedButton = connect(({ dispatch }) => {
  const onClick = () => {
    dispatch(clearCompleteTodos());
  };

  return html`
    <button className="clear-completed" onClick=${onClick}>
      Clear completed
    </button>
  `;
});
