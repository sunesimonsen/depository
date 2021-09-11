import { html } from "@depository/react/html";
import { useDispatch, useData } from "@depository/react";

import {
  visibilityFilter,
  setVisibilityFilter,
} from "@depository/todomvc-model";

export const VisibilityFilter = ({ value, children }) => {
  const dispatch = useDispatch();
  const filter = useData(visibilityFilter);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(setVisibilityFilter(value));
  };

  return html`
    <li>
      <a
        className=${filter === value ? "selected" : ""}
        href="#"
        onClick=${onClick}
      >
        ${children}
      </a>
    </li>
  `;
};
