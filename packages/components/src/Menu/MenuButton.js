import { html } from "@depository/view";
import { Button } from "../Button.js";
import ChevronDownStroke12Icon from "../icons/ChevronDownStroke12Icon.js";
import { ms1 } from "../spacing.js";

export class MenuButton {
  render({ children, ...other }) {
    return html`
      <${Button} ...${other}>
        ${children}<${ChevronDownStroke12Icon} className=${ms1} />
      <//>
    `;
  }
}
