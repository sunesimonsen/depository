import { html } from "@depository/view";
import { ColumnLayout, Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="2">
        <${Button}>Button<//>
        <${Button}>Button<//>
        <${Button}>Button<//>
        <${Button}>Button<//>
      <//>
    `;
  }
}
