import { html } from "@depository/view";
import { Menu } from "./Menu.js";

export class Select {
  render({ children, ...other }) {
    return html`
      <${Menu} placement="bottom-stretch" role="combobox" ...${other}>
        ${children}
      <//>
    `;
  }
}
