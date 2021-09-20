import { html } from "@depository/view";
import { css } from "stylewars";

const sidebarStyles = css`
  & {
    grid-area: start;
    padding: 16px 32px;
    min-width: 300px;
    background: rgb(246, 244, 244);
    overflow-y: auto;
  }

  & > h1 {
    font-size: 16px;
  }

  & > ul {
    padding: 0;
    margin: 0;
  }

  & > ul > li {
    padding: 0;
    margin: 4px;
    list-style-type: none;
  }
`;

export class Sidebar {
  render({ children }) {
    return html`<nav className=${sidebarStyles}>${children}</nav>`;
  }
}
