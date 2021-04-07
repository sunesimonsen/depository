import { html } from "@depository/view";
import { Pulse, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Pulse} />
      <//>
    `;
  }
}
