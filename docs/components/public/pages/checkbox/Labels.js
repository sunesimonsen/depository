import { html } from "@depository/view";
import { Checkbox, ColumnLayout, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto" justifyItems="start">
          <${Checkbox} id="checkbox-default" />
          <label for="checkbox-default">Default</label>
          <${Checkbox} id="checkbox-checked" checked />
          <label for="checkbox-checked">Checked</label>
          <${Checkbox} id="checkbox-indeterminate" indeterminate />
          <label for="checkbox-indeterminate">Indeterminate</label>
        <//>
      <//>
    `;
  }
}
