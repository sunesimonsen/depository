import { html } from "@depository/view";
import { ColumnLayout, Center, Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout}>
          <${Button}>Button<//>
          <${Button}>Button<//>
          <${Button}>Button<//>
        <//>
      <//>
    `;
  }
}
