import { html } from "@depository/view";
import { Anchor } from "@depository/components";

export default class Example {
  render() {
    return html`<${Anchor} href="./button">Show button documentation<//>`;
  }
}
