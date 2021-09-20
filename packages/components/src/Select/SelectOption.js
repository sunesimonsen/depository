import { html } from "@depository/view";
import { MenuItem } from "../Menu/MenuItem.js";
import { css } from "stylewars";

import CheckLgStroke16Icon from "../icons/CheckLgStroke16Icon.js";

const iconStyles = css`
  & {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    transition: opacity 0.1s ease-in-out 0s;
    opacity: 1;
    color: rgb(31, 115, 183);
    width: 40px;
  }
`;

export class SelectOption {
  renderIcon() {
    return html`<div class=${iconStyles}><${CheckLgStroke16Icon} /></div>`;
  }

  render({ children, selected, ...other }) {
    return html`
      <${MenuItem}
        role="option"
        aria-selected=${selected ? "true" : "false"}
        ...${other}
      >
        ${selected && this.renderIcon()}${children}
      <//>
    `;
  }
}
