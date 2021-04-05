import { html } from "@depository/view";
import { ColumnLayout, Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${ColumnLayout}>
        <${Button}>Button<//>
        <${Button}>Button<//>
        <${Button}>Button<//>
      <//>
    `;
  }
}
