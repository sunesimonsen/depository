import { html } from "@depository/view";

import {
  TextInput,
  Button,
  ColumnLayout,
  Center,
} from "@depository/components";

export default class Example {
  static defaultProps() {
    return { id: "DefaultInput", value: "Ford Focus" };
  }

  constructor({ id }) {
    this.onChange = (e) => {
      this.dispatch({
        name: "inputChanged",
        payload: { [`${id}.value`]: e.target.value },
      });
    };

    this.onSubmit = () => {
      alert(`Current value: ${this.props.value}`);
    };
  }

  data({ id }) {
    return { value: `${id}.value` };
  }

  render({ value }) {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto 300px auto">
          <label for="car-model">Car model</label>
          <${TextInput}
            id="car-model"
            type="text"
            readonly
            .value=${value}
            @change=${this.onChange}
          />
          <${Button} @click=${this.onSubmit}>Submit<//>
        <//>
      <//>
    `;
  }
}
