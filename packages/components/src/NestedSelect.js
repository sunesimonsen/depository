import { html } from "@depository/view";
import { NestedMenu } from "./NestedMenu.js";

export class NestedSelect {
  render({ children, ...other }) {
    return html`
      <${NestedMenu} placement="bottom-stretch" ...${other}>${children}<//>
    `;
  }
}
