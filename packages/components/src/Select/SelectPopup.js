import { html } from "@depository/view";
import { MenuPopup } from "../Menu/MenuPopup.js";

export class SelectPopup {
  render({ children, ...other }) {
    return html`<${MenuPopup} role="listbox" ...${other}>${children}<//> `;
  }
}
