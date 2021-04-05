import { html } from "@depository/view";
import { ColumnLayout, Center, Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="2">
          <${Button}>Button<//>
          <${Button}>Button<//>
          <${Button}>Button<//>
          <${Button}>Button<//>
        <//>
      <//>
    `;
  }
}
