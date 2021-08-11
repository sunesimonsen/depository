import { html } from "@depository/view";
import { Checkbox, ColumnLayout, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="3">
          <${Checkbox} id="checkbox-0" />
          <${Checkbox} id="checkbox-1" checked />
          <${Checkbox} id="checkbox-2" indeterminate />
        <//>
      <//>
    `;
  }
}
