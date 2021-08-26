import { html } from "@depository/view";
import {
  visibilityFilter,
  setVisibilityFilter,
} from "@depository/todomvc-model";

export class VisibilityFilter {
  constructor() {
    this.onClick = (e) => {
      e.preventDefault();
      this.dispatch(setVisibilityFilter(this.props.value));
    };
  }

  data() {
    return { visibilityFilter };
  }

  render({ visibilityFilter, value, children }) {
    return html`
      <li>
        <a
          class=${visibilityFilter === value && "selected"}
          href="#"
          @click=${this.onClick}
        >
          ${children}
        </a>
      </li>
    `;
  }
}
