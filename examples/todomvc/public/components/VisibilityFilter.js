import { html } from "@depository/view";
import {
  setVisibilityFilter,
  isVisibilityFilterSelected,
} from "@depository/todomvc-model";

export class VisibilityFilter {
  constructor() {
    this.onClick = (e) => {
      e.preventDefault();
      this.dispatch(setVisibilityFilter(this.props.value));
    };
  }

  data({ value }) {
    return {
      isSelected: isVisibilityFilterSelected(value),
    };
  }

  render({ value, isSelected, children }) {
    return html`
      <li>
        <a
          className=${isSelected && "selected"}
          href="#"
          onClick=${this.onClick}
        >
          ${children}
        </a>
      </li>
    `;
  }
}
