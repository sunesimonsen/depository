import { html } from "@depository/view";
import { Button, ColumnLayout } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="3">
        <${Button}>Default<//>
        <${Button} primary>Basic<//>
        <${Button} basic>Basic<//>
      <//>
    `;
  }
}
