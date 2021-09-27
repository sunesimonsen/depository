import { html } from "@depository/view";
import {
  setVisibilityFilter,
  isVisibilityFilterSelected,
} from "@depository/todomvc-model";

class VisibilityfilterOption {
  data({ value }) {
    return {
      isSelected: isVisibilityFilterSelected(value),
    };
  }

  render({ value, isSelected, children }) {
    return html`
      <option value=${value} selected=${isSelected}>${children}</option>
    `;
  }
}

export class VisibilityFilters {
  constructor() {
    this.onChange = (e) => {
      this.dispatch(setVisibilityFilter(e.target.value));
    };
  }

  render() {
    return html`
      <fieldset>
        <legend>Set the visibility filtering of the todos</legend>
        <label for="visibibility-filter">Visibility filter</label>
        <select onChange=${this.onChange}>
          <${VisibilityfilterOption} value="all">All<//>
          <${VisibilityfilterOption} value="active">Active<//>
          <${VisibilityfilterOption} value="completed">Completed<//>
        </select>
      </fieldset>
    `;
  }
}
