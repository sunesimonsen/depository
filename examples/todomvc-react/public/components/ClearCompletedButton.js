import { html } from "@depository/react/html";
import { useDispatch } from "@depository/react";
import { clearCompleteTodos } from "@depository/todomvc-model";

export const ClearCompletedButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(clearCompleteTodos());
  };

  return html`
    <button className="clear-completed" onClick=${onClick}>
      Clear completed
    </button>
  `;
};
