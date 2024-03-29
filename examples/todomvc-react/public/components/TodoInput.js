import { html } from "@depository/react/html";
import { useDispatch } from "@depository/react";
import { createTodo } from "@depository/todomvc-model";

const ENTER = 13;

export const TodoInput = () => {
  const dispatch = useDispatch();

  const onKeyDown = (e) => {
    if (e.which === ENTER) {
      dispatch(createTodo({ text: e.target.value.trim() }));

      e.target.value = "";
    }
  };

  // prettier-ignore
  return html`
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus=${true}
      onKeyDown=${onKeyDown}
    />
  `;
};
