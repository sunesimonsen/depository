import { html } from "@depository/view";
import { Spinner, Center } from "@depository/components";

export default class Example {
  render() {
    return html`<${Center}><${Spinner} /><//>`;
  }
}
