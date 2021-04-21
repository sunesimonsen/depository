import { html } from "@depository/view";
import { css } from "stylewars";
import { Button } from "../Button.js";
import ChevronDownStroke12Icon from "../icons/ChevronDownStroke12Icon.js";

const iconStyles = css`
  & {
    margin-inline-start: 8px;
  }
`;

export class MenuButton {
  render({ children, ...other }) {
    return html`<${Button} ...${other}>
      ${children}<${ChevronDownStroke12Icon} class=${iconStyles} />
    <//>`;
  }
}
