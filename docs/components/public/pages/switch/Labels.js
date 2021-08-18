import { html } from "@depository/view";
import { Switch, ColumnLayout, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto" justifyItems="start">
          <${Switch} id="switch-default" />
          <label for="switch-default">Default</label>
          <${Switch} id="switch-checked" checked />
          <label for="switch-checked">Checked</label>
          <${Switch} id="switch-disabled" disabled />
          <label for="switch-disabled">Disabled</label>
          <${Switch} id="switch-checked-disabled" disabled checked />
          <label for="switch-checked-disabled">Disabled (checked)</label>
        <//>
      <//>
    `;
  }
}
