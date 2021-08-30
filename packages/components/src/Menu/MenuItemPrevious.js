import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { MenuItem } from "./MenuItem.js";
import ChevronRightStroke16Icon from "../icons/ChevronRightStroke16Icon.js";
import ChevronLeftStroke16Icon from "../icons/ChevronLeftStroke16Icon.js";

const iconStyles = css`
  & {
    position: absolute;
    color: rgb(104, 115, 125);
  }
`;

const leftIconStyles = css`
  & {
    left: 8px;
  }

  [dir="rtl"] & {
    visibility: hidden;
  }

  [dir="rtl"] [dir="ltr"] & {
    visibility: visible;
  }
`;

const rightIconStyles = css`
  & {
    right: 8px;
    visibility: hidden;
  }

  [dir="rtl"] & {
    visibility: visible;
  }

  [dir="rtl"] [dir="ltr"] & {
    visibility: hidden;
  }
`;

export class MenuItemPrevious {
  render({ children, ...other }) {
    return html`
      <${MenuItem} ref=${this.createRef("ref")} ...${other}>
        <${ChevronLeftStroke16Icon}
          class=${classes(iconStyles, leftIconStyles)}
        />
        ${children}
        <${ChevronRightStroke16Icon}
          class=${classes(iconStyles, rightIconStyles)}
        />
      <//>
    `;
  }
}

MenuItemPrevious.isPreviousAction = true;
