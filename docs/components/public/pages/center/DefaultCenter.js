import { html } from "@depository/view";
import { Center } from "@depository/components";

export default class Example {
  render() {
    return html`
      <${Center} style=${{ height: "150px" }}>
        <div>Center of the universe</div>
      <//>
    `;
  }
}
