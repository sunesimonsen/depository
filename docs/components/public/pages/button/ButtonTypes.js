import { html } from "@depository/view";
import { Button, Center, ColumnLayout } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="3">
          <${Button}>Default<//>
          <${Button} primary>Basic<//>
          <${Button} basic>Basic<//>
        <//>
      <//>
    `;
  }
}
