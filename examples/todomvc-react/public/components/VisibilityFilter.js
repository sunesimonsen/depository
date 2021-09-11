import { html } from "@depository/react/html";
import { connect } from "@depository/react";
import {
  visibilityFilter,
  setVisibilityFilter,
} from "@depository/todomvc-model";

export const VisibilityFilter = connect(
  { visibilityFilter },
  ({ dispatch, visibilityFilter, value, children, store }) => {
    const onClick = (e) => {
      e.preventDefault();
      dispatch(setVisibilityFilter(value));
    };

    return html`
      <li>
        <a
          className=${visibilityFilter === value ? "selected" : ""}
          href="#"
          onClick=${onClick}
          >${children}</a
        >
      </li>
    `;
  }
);
