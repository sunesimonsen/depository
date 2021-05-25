import { html } from "@depository/view";
import { MediaInput, Button, ColumnLayout } from "@depository/components";
import SearchStroke16Icon from "@depository/components/icons/SearchStroke16Icon";
import CarStroke12Icon from "@depository/components/icons/CarStroke12Icon";
import { me2, ms2 } from "@depository/components/spacing";

export default class Example {
  static defaultProps() {
    return { id: "MediaInput", value: "Ford" };
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
      <${ColumnLayout} columns="auto 300px auto">
        <label for="car-brand">Find brand</label>
        <${MediaInput}>
          <${CarStroke12Icon} class=${me2} />
          <input
            id="car-brand"
            type="text"
            .value=${value}
            @change=${this.onChange}
          />
          <${SearchStroke16Icon} class=${ms2} />
        <//>
        <${Button} @click=${this.onSubmit}>Search<//>
      <//>
    `;
  }
}
