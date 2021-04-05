import { html } from "@depository/view";
import { ColumnLayout, Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} justifyItems="start" columns="200px auto 200px auto">
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
