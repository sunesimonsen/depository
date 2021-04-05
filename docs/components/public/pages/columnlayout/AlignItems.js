import { html } from "@depository/view";
import { ColumnLayout, Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} alignItems="end" columns="150px auto 150px auto">
        Click this button
        <${Button}>Button<//>
        Click this button
        <${Button}>Button<//>
        Click this button
        <${Button}>Button<//>
        Click this button
        <${Button}>Button<//>
      <//>
    `;
  }
}
