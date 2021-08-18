import { html } from "@depository/view";
import { Switch, Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Switch} id="switch-disabled" disabled />
      <//>
    `;
  }
}
