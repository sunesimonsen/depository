import { html } from "@depository/react/html";
import { useDispatch } from "@depository/react";
import { removeTodo } from "@depository/todomvc-model";

export const DestroyButton = ({ id }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeTodo({ id }));
  };

  return html`<button onClick=${onClick} className="destroy"></button>`;
};
