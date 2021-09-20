import { html } from "../dependencies/view.esm.js";
import { css } from "../dependencies/stylewars.esm.js";

const sidebarStyles = css`
  & {
    background: #f5f5f5;
    border-right: thin solid #cecece;
    overflow-y: auto;
  }
`;

export class Sidebar {
  render({ children }) {
    return html`<div className=${sidebarStyles}>${children}</div>`;
  }
}
