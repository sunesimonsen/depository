import { html } from "@depository/view";
import { Anchor, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Anchor} href="./button">Show button documentation<//>
      <//>
    `;
  }
}
