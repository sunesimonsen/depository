import { html } from "@depository/view";
import { css } from "stylewars";

const listStyles = css`
  & {
    padding: 0;
    margin: 0;
  }
`;

export class List {
  render({ children }) {
    return html`
      <ul class=${listStyles}>
        ${children}
      </ul>
    `;
  }
}

const listItemStyles = css`
  & {
    padding: 0;
    margin: 4px;
    list-style-type: none;
  }
`;

export class ListItem {
  render({ children }) {
    return html`<li class=${listItemStyles}>${children}</li>`;
  }
}

const headingStyles = css`
  & {
    font-size: 16px;
  }
`;

export class Heading {
  render({ children }) {
    return html`<h1 class=${headingStyles}>${children}</h1>`;
  }
}

const sidebarStyles = css`
  & {
    grid-area: start;
    padding: 16px 32px;
    min-width: 300px;
    background: rgb(246, 244, 244);
    overflow-y: auto;
  }
`;

export class Sidebar {
  render({ children }) {
    return html`<nav class=${sidebarStyles}>${children}</nav>`;
  }
}
