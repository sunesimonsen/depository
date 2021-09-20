import { html } from "htm/preact";
import { connect } from "@depository/preact";
import { createTodo } from "@depository/todomvc-model";

export const TodoInput = connect(({ dispatch }) => {
  const onKeyDown = (e) => {
    if (e.code === "Enter") {
      dispatch(createTodo({ text: e.target.value.trim() }));

      e.target.value = "";
    }
  };

  return html`
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autofocus
      onKeyDown=${onKeyDown}
    />
  `;
});
