import { html } from "@depository/view";
import { MenuItemPrevious } from "../Menu/MenuItemPrevious.js";

export class SelectOptionPrevious {
  render({ children, ...other }) {
    return html`
      <${MenuItemPrevious} role="options" ...${other}>${children}<//>
    `;
  }
}

SelectOptionPrevious.isPreviousAction = true;
