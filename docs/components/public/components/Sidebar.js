import { html } from "@depository/view";
import { css } from "stylewars";
import { PageReference } from "./PageReference.js";

const styles = css`
  & {
    padding: 16px;
  }
`;

const listStyles = css`
  & {
    padding: 0;
    margin: 0;
  }
`;

const listItemStyles = css`
  & {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

export class Sidebar {
  render() {
    return html`
      <nav class=${styles}>
        <ul class=${listStyles}>
          <li class=${listItemStyles}>
            <${PageReference} id="anchor">Anchor<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="button">Button<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="iconbutton">Icon button<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="columnlayout">Column layout<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="spinner">Spinner<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="skeleton">Skeleton<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="pulse">Pulse<//>
          </li>
          <li class=${listItemStyles}>
            <${PageReference} id="icons">Icons<//>
          </li>
        </ul>
      </nav>
    `;
  }
}
