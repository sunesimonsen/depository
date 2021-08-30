import { html } from "@depository/view";
import { MenuItemNext } from "../Menu/MenuItemNext.js";

export class SelectOptionNext {
  render({ children, ...other }) {
    return html`<${MenuItemNext} role="options" ...${other}>${children}<//>`;
  }
}

SelectOptionNext.isNextAction = true;
