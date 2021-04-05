import { html } from "@depository/view";
import { Button } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Button}>Default<//>
      <${Button} primary>Basic<//>
      <${Button} basic>Basic<//>
    `;
  }
}
