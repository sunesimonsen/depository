import { html } from "@depository/view";
import { Checkbox, ColumnLayout, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="3">
          <${Checkbox} id="checkbox-disabled-0" disabled />
          <${Checkbox} id="checkbox-disabled-1" checked disabled />
          <${Checkbox} id="checkbox-disabled-2" indeterminate disabled />
        <//>
      <//>
    `;
  }
}
