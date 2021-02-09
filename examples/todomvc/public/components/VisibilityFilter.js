import { html } from "@depository/view";
import { visibilityFilter, setVisibilityFilter } from "../models/todo.js";

export class VisibilityFilter {
  data() {
    return { visibilityFilter };
  }

  onClick(e) {
    e.preventDefault();
    const { value } = this.props;
    this.dispatch(setVisibilityFilter(value));
  }

  render({ visibilityFilter, value, children }) {
    return html`
      <li>
        <a
          class=${visibilityFilter === value && "selected"}
          href="#"
          onClick=${this.onClick}
        >
          ${children}
        </a>
      </li>
    `;
  }
}
