import React from "react";
import { html } from "@depository/react/html";
import { connect } from "@depository/react";
import { activeTodoCount, toggleAllTodos } from "@depository/todomvc-model";

export const ToggleAll = connect(
  { activeTodoCount },
  ({ dispatch, activeTodoCount }) => {
    const onChange = () => {
      dispatch(toggleAllTodos());
    };

    return html`
      <${React.Fragment}>
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked=${activeTodoCount === 0}
          onChange=${onChange}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      <//>
    `;
  }
);
